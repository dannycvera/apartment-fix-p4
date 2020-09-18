class IssuesController < ApplicationController
  before_action :set_issue, only: [:show, :update, :destroy]

  # GET /issues
  def index
    @user = User.find(params[:user_id])
    @issues = Issue.where(user_id: @user.id)

    render json: @issues, include: :user, status: :ok
  end

  def index_all
    @index = Index.all
    render json: @index, status: :ok
  end

  # GET /issues/1
  def show
    @user = User.find(params[:user_id])
    render json: @issue, include: :user, status: :ok

  end

  # POST /issues
  def create
    @issue = Issue.new(issue_params)

    if @issue.save
      render json: @issue, status: :created, location: @issue
    else
      render json: @issue.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /issues/1
  def update
    if @issue.update(issue_params)
      render json: @issue
    else
      render json: @issue.errors, status: :unprocessable_entity
    end
  end

  # DELETE /issues/1
  def destroy
    @issue.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_issue
      
      @issue = Issue.find(params[:id])
      
    end

    # Only allow a trusted parameter "white list" through.
    def issue_params
      params.require(:issue).permit(:image_url, :location, :title, :description, :resolved, :resolved_notes, :user_id)
    end
end
