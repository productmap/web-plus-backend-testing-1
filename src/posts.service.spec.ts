import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };
  let preExistingPost: Post;

  beforeEach(async () => {
    postsService = new PostsService();

    preExistingPost = postsService.create({ text: 'Some pre-existing post' });
  });

  it('should add a new post', () => {
    const newPost = postsService.create(post);
    const foundPost = postsService.find(newPost.id);

    expect(foundPost).toEqual(newPost);
  });

  it('should find a post', () => {
    const foundPost = postsService.find(preExistingPost.id);

    expect(foundPost).toEqual(preExistingPost);
  });
});
