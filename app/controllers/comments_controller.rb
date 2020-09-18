class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :update, :destroy]

  # GET /comments
  def index
    @user = User.find(params[:user_id])
    @issue = Issue.find(params[:issue_id])
    @comments = Comment.where(issue_id: @issue.id)

    render json: @comments, include: [issue: {include: :user}], status: :ok
  end

  # GET /comments/1
  def show
    @user = User.find(params[:user_id])
    @issue = Issue.find(params[:issue_id])
    # @comment = Comment.find(params[:id])
    render json: @comment, include: [issue: {include: :user}], status: :ok
  end

  # POST /comments
  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render json: @comment, status: :created, location: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /comments/1
  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /comments/1
  def destroy
    @comment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def comment_params
      params.require(:comment).permit(:image_url, :comment, :issue_id, :user_id)
    end
end
