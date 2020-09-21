class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :update, :destroy]

  # GET /issues/:id/comments
  def index
    # @issue = Issue.find(params[:id])
    @comments = Comment.where(issue_id: params[:id]).order(created_at: :desc)
    # @user = User.find(id: @comments.user_id)

    # render json: @comments, include: [issue: {include: :user}], status: :ok
    # render json: @comments, include: :user, status: :ok
    render json: @comments, include: [:user, :issue], status: :ok

  end

  # GET /comments/1
  def show
    # @user = User.find(params[:user_id])
    # @issue = Issue.find(params[:issue_id])
    # @comment = Comment.find(params[:id])
    render json: @comment, include: [:user, :issue], status: :ok
  end
  # include: [issue: {include: :user}],
  # POST /issues/:id/comments
  def create
    @comment = Comment.new(comment_params)
    @issue = Issue.find(@comment.issue_id)
    @user = User.find(@comment.user_id)
    if @comment.save
      render json: @comment, include: [:user, :issue], status: :ok
      # render json: @comment, include: [issue: {include: :user}], status: :created, location: @comment
    else
      render json: @comment_single.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /comments/1
  def update
    if @comment.update(comment_params)
      @issue = Issue.find(@comment.issue_id)
      @user = User.find(@comment.user_id)
      render json: @comment, include: [:user, :issue], status: :ok
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
      params.require(:comment).permit(:image_url, :comment_text, :issue_id, :user_id)
    end
end
