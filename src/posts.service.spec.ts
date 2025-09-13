import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };
  const preExistingPostData = { text: 'Some pre-existing post' };
  let preExistingPost: Post;

  beforeEach(async () => {
    postsService = new PostsService();

    preExistingPost = postsService.create(preExistingPostData);
  });

  it('should add a new post', () => {
    const newPost = postsService.create(post);
    const foundPost = postsService.find(newPost.id);

    expect(foundPost).toMatchObject(post);
  });

  it('should find a post', () => {
    const foundPost = postsService.find(preExistingPost.id);

    expect(foundPost).toMatchObject(preExistingPostData);
  });
});
