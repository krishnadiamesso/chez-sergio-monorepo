# frozen_string_literal: true

require 'test_helper'

module Api
  module V1
    class PizzasControllerTest < ActionDispatch::IntegrationTest
      # test "the truth" do
      #   assert true
      # end
      #
      test 'should get index' do
        get api_v1_cart_items_url, as: :json
        assert_response :success
      end
    end
  end
end
