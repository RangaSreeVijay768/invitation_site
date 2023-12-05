import {Injectable, Injector} from '@angular/core';
import {RestService} from '@core/http/rest.service';
// import {Auth} from '@aws-amplify/auth';
import {environment} from '@environment/environment';
import {CoreHttpClient} from '@core/http/http.module';
import {ImagesRequests} from '@images/images.models';
import AttachImage = ImagesRequests.AttachImage;
import {AuthService} from '@core/auth.service';
import {FileUploader} from 'ng2-file-upload';
import {CommonsService} from "@core/commons.service";

@Injectable({
  providedIn: 'root'
})
export class FilesService extends RestService {

  // copied from
  // https://devdactic.com/ionic-4-image-upload-storage/
  authService: AuthService;

  constructor(httpClient: CoreHttpClient, authService: AuthService) {
    super(httpClient);
    this.authService = authService;
    // this.filesSecureService = super.getService(ImagesConstants.FILES_SECURED_ENDPOINT);
  }

  getFileUploader(authToken?: string,auto_upload?:boolean) {
    const uploader = new FileUploader(
      {
        url: environment.apiUrls.filesUrl,
        authToken: 'Bearer ' + authToken,
        autoUpload: CommonsService.isNullOrUndefined(auto_upload)?true:auto_upload,
        authTokenHeader: 'Authorization'
      });
    uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };
    return uploader;
  }
}





