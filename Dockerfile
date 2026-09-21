# ============================================================
# STAGE 1/2 — VUE FRONTEND
# ============================================================
FROM node:18-alpine AS frontend

RUN echo "" && \
    echo "========================================================" && \
    echo "  [1/6]  FRONTEND — Installing npm dependencies...      " && \
    echo "========================================================" && \
    echo ""

WORKDIR /frontend
COPY frontend/package.json frontend/package-lock.json* frontend/yarn.lock* ./
RUN npm install

RUN echo "" && \
    echo "========================================================" && \
    echo "  [2/6]  FRONTEND — Building Vue app for production...  " && \
    echo "========================================================" && \
    echo ""

COPY frontend/ .
RUN npm run build

RUN echo "" && \
    echo "========================================================" && \
    echo "  [OK]   FRONTEND BUILD COMPLETE                        " && \
    echo "========================================================" && \
    echo ""

# ============================================================
# STAGE 2/2 — RAILS API
# ============================================================
FROM ruby:3.1-slim-bookworm

RUN echo "" && \
    echo "========================================================" && \
    echo "  [3/6]  RAILS — Installing system packages...          " && \
    echo "========================================================" && \
    echo ""

RUN apt-get update -qq && \
    apt-get install -y --no-install-recommends \
    build-essential libpq-dev curl && \
    rm -rf /var/lib/apt/lists/*

RUN echo "" && \
    echo "========================================================" && \
    echo "  [4/6]  RAILS — Installing Ruby gems (bundle)...       " && \
    echo "========================================================" && \
    echo ""

WORKDIR /app

COPY backend/Gemfile backend/Gemfile.lock ./
RUN bundle config set --local without 'development test' && \
    bundle install --jobs 4

RUN echo "" && \
    echo "========================================================" && \
    echo "  [5/6]  RAILS — Copying application code...            " && \
    echo "========================================================" && \
    echo ""

COPY backend/ .

RUN echo "" && \
    echo "========================================================" && \
    echo "  [6/6]  MERGING — Copying Vue build into Rails public/ " && \
    echo "========================================================" && \
    echo ""

COPY --from=frontend /frontend/dist /app/public

RUN echo "" && \
    echo "========================================================" && \
    echo "  [DONE] IMAGE READY — All stages complete              " && \
    echo "========================================================" && \
    echo ""

ENV RAILS_ENV=production \
    RAILS_LOG_TO_STDOUT=true \
    RAILS_SERVE_STATIC_FILES=true

EXPOSE 3000

CMD ["bash", "-c", "bundle exec rails db:prepare && bundle exec rails db:seed && bundle exec puma -C config/puma.rb"]
