# frozen_string_literal: true

require 'test_helper'

module Api
  module V1
    class CartItemsControllerTest < ActionDispatch::IntegrationTest
      setup do
        @montana = cart_items(:montana)
      end

      test 'should get index' do
        get api_v1_cart_items_url, as: :json
        assert_response :success
      end

      test 'should add new item in cart' do
        assert_difference('CartItem.count') do
          post api_v1_cart_items_url, params: { cart_item: { pizza_id: 3 } }, as: :json
        end

        assert_response :success
      end

      test 'should update quantity of cart item' do
        patch api_v1_cart_item_url(@montana), params: { cart_item: { quantity: 6 }, pizza_id: 3 }, as: :json
        assert_response 200
        @montana.reload
        assert_equal(@montana.quantity, 6)
      end

      test 'should delete cart item' do
        assert_difference('CartItem.count', -1) do
          delete api_v1_cart_item_url(@montana), as: :json
        end
        assert_equal(CartItem.count, 1)
        assert_response 200
      end
    end
  end
end
