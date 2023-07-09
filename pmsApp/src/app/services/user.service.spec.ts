import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HttpTestingController} from '@angular/common/http/testing';
import baseUrl from './helper';
describe('UserService', () => {
  let service: UserService;
  let testingController: HttpTestingController;
  const User={
    name:'sudhanshu', 
    fullName:'sudhanshu',
    contact:'7350593612',
    email:'sp@gmail.com',
    password:'pass',
  }
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(UserService);
    testingController=TestBed.inject(HttpTestingController);
    


  });

  it('should be created', () => {
    expect(service).toBeTruthy(); 
  });



  it('add user',()=>{
    service.addUser(User).subscribe(
(data:any)=>{
  expect(data).toBeTruthy();
}
    );
    const mockReq=testingController.expectOne(`${baseUrl}/user/add`);
    expect(mockReq.request.method).toEqual('POST');
    mockReq.flush(Object.values(User));
  })
});
