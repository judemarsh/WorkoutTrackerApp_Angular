import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from  '@angular/common/http';
import { Category } from '../model/category';
import { AppSettings } from '../app-settings';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
 
  categoryList: Category[];

  constructor(private httpClient: HttpClient) {
    this.categoryList = [];
   }

  /*public getCategoryList() : Category[] {
    this.httpClient.get(AppSettings.serviceBaseURL + '/getCategoryList').subscribe(categories => {
      categories.forEach(category => {
        this.categoryList.push(category);
      });
    });
    return this.categoryList;
  }*/

  public getCategoryList() : Observable<any> {
    return this.httpClient.get<Category[]>(AppSettings.CATEGORY_SERVICE_BASE_URL + '/');
    
  }

  public getCategoryById(categoryId: number) : Observable<Category>{
    return this.httpClient.get<Category>(AppSettings.CATEGORY_SERVICE_BASE_URL + '/'+ categoryId);
  }

  public saveCategory(categoryObj: Category): Observable<number>{
    return this.httpClient.post<number>(AppSettings.CATEGORY_SERVICE_BASE_URL + '/', categoryObj);
  }

  public updateCategory(categoryObj: Category): Observable<number>{
    return this.httpClient.put<number>(AppSettings.CATEGORY_SERVICE_BASE_URL + '/', categoryObj);
  }

  public deleteCategory(categoryId: number): Observable<boolean>{
    return this.httpClient.delete<boolean>(AppSettings.CATEGORY_SERVICE_BASE_URL + '/'+categoryId);
  }
}
