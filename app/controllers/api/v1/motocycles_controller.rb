class Api::V1::MotocyclesController < ApplicationController
  before_action :set_motocycle, only: [:show, :update, :destroy]

  # GET /motocycles
  def index
    @motocycles = Motocycle.all

    render json: @motocycles
  end

  # GET /motocycles/1
  def show
    render json: @motocycle
  end

  # POST /motocycles
  def create
    @motocycle = Motocycle.new(motocycle_params)

    if @motocycle.save
      render json: @motocycle, status: :created, location: @motocycle
    else
      render json: @motocycle.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /motocycles/1
  def update
    if @motocycle.update(motocycle_params)
      render json: @motocycle
    else
      render json: @motocycle.errors, status: :unprocessable_entity
    end
  end

  # DELETE /motocycles/1
  def destroy
    @motocycle.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_motocycle
      @motocycle = Motocycle.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def motocycle_params
      params.require(:motocycle).permit(:model)
    end
end
