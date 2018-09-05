class Api::V1::PostsController < ApplicationController

  before_action :find_post, only: [:update, :show]

  def index
    @posts = Post.all
    render json: @posts, status: 200
  end

  def show
    render json: @post, status: 200
  end

  def create
    @post = Post.create(post_params)
    render json: @post, status: 201
  end

  # need 'new' method? need 'edit' & destroy methods?

  def update
    @post.update(post_params)
    if @post.save
      render json: @post, status: :accepted
    else
      render json: { errors: @post.errors.full_messages }, status: :unprocessible_entity
    end
  end

  private

  def post_params
    params.permit(:place, :description, :image_file, :user_id)   #These must be included in the body of the POST or PATCH requests we will be making with JS fetch.
  end

  def find_post
    @post = Post.find(params[:id])
  end

end
