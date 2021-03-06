class PostsController < ApplicationController
  before_action :require_user, only: [:index, :show]

  def index
  @posts = Post.all
end

def show
  @post = Post.find(params[:id])
end

def new
  @post = Post.new
end

def create
  @post = post.new(article_params)

  if @post.save
    redirect_to @post
  else
    render 'new'
  end
end

def edit
  @post = Post.find(params[:id])
end

def update
  @post = Post.find(params[:id])

  if @post.update(post_params)
    redirect_to @post
  else
    render 'edit'
  end
end

def destroy
  @post = Post.find(params[:id])
  @post.destroy

  redirect_to posts_path
end



private
  def post_params
    params.require(:posts).permit(:content, :user_id)
  end
end
