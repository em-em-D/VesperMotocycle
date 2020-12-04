require 'test_helper'

class MotocyclesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @motocycle = motocycles(:one)
  end

  test "should get index" do
    get motocycles_url, as: :json
    assert_response :success
  end

  test "should create motocycle" do
    assert_difference('Motocycle.count') do
      post motocycles_url, params: { motocycle: { model: @motocycle.model } }, as: :json
    end

    assert_response 201
  end

  test "should show motocycle" do
    get motocycle_url(@motocycle), as: :json
    assert_response :success
  end

  test "should update motocycle" do
    patch motocycle_url(@motocycle), params: { motocycle: { model: @motocycle.model } }, as: :json
    assert_response 200
  end

  test "should destroy motocycle" do
    assert_difference('Motocycle.count', -1) do
      delete motocycle_url(@motocycle), as: :json
    end

    assert_response 204
  end
end
