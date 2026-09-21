# frozen_string_literal: true

module Api
  module V1
    class PizzasController < ApplicationController
      # GET /api/v1/pizzas
      def index
        render json: Pizza.all
      end
    end
  end
end
