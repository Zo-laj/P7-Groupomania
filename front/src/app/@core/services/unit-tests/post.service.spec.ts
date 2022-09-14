
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { Post } from '../../models/post.model';
import { PostsService } from '../posts.service';

let httpClientSpy: jasmine.SpyObj<HttpClient>;
let postsService: PostsService;

beforeEach(() => {
  // TODO: spy on other methods too
  httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  postsService = new PostsService(httpClientSpy);
});



// it('should return expected heroes (HttpClient called once)', (done: DoneFn) => {
//   const expectedPosts: Post[] =
//   [{
//     id: 6,
//     title: "Roxy !!",
//     description: "Gâteau time !",
//     imageUrl: "http://localhost:3000/images/WhatsApp_Image_2022-08-21_at_09.25.15.jpeg1661066928140.jpg",
//     createdAt: "2022-08-21T07:27:28.000Z",
//     updatedAt: "2022-09-06T16:01:34.000Z",
//     UserId: 2,
//     User: {userName:"Admin"},
//     Likes:[{
//         id: 113,
//         likeStatus: true,
//         createdAt: "2022-09-06T16:16:20.000Z",
//         updatedAt: "2022-09-06T16:16:20.000Z",
//         PostId: 6,
//         UserId: 2
//     }]
//    },
//    {
//     id: 22,
//     title: "Coucou",
//     description: "Petit chat",
//     imageUrl: "http://localhost:3000/images/WhatsApp_Image_2022-08-21_at_09.25.15_(1).jpeg1662470728081.jpg",
//     createdAt: "2022-09-06T13:25:28.000Z",
//     updatedAt: "2022-09-07T09:16:15.000Z",
//     UserId: 7,
//     User:{ userName:"Zoé"},
//     Likes:[{
//         id: 112,
//         likeStatus: true,
//         createdAt: "2022-09-06T16:12:13.000Z",
//         updatedAt: "2022-09-06T16:12:13.000Z",
//         PostId: 22,
//         UserId: 2
//     }]
//    }]

//   httpClientSpy.get.and.returnValue(of(expectedPosts));

//   postsService.getAllPosts().subscribe({
//     next: posts => {
//       expect(posts)
//         .withContext('expected heroes')
//         .toEqual(expectedPosts);
//       done();
//     },
//     error: done.fail
//   });
//   expect(httpClientSpy.get.calls.count())
//     .withContext('one call')
//     .toBe(1);
// });