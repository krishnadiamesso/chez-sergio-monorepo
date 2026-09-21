# frozen_string_literal: true

module Api
  module V1
    class CartItemsController < ApplicationController
      # GET /api/v1/cart_items
      def index
        @cart_items = CartItem.all
        render json: @cart_items
      end

      # POST /api/v1/cart_items
      def create
        @cart_item = CartItem.new(cart_item_params)

        if @cart_item.save
          render json: @cart_item, status: :created
        else
          render json: @cart_item.errors, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /api/v1/cart_items/1
      def update
        @cart_item = CartItem.find(params[:id])
        if @cart_item.update(cart_item_params)
          render json: @cart_item
        else
          render json: @cart_item.errors, status: :unprocessable_entity
        end
      end

      # DELETE /api/v1/cart_items/1
      def destroy
        @cart_item = CartItem.find(params[:id])
        @cart_item.destroy
        render json: @cart_item
      end

      private

      def cart_item_params
        params.require(:cart_item).permit(:pizza_id, :quantity)
      end
    end
  end
end
