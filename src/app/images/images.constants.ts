import {CommonsService} from "@core/commons.service";

export class ImagesConstants {

  public static API_AUTH_ENDPOINT = 'api/auth';
  public static API_HELP_CENTER_ENDPOINT = '/api/help-center';

  public static IMAGES_ENDPOINT = 'images';
  public static IMAGES_SECURED_ENDPOINT = CommonsService.appendSecuredToUrl(ImagesConstants.IMAGES_ENDPOINT);

  public static FILES_ENDPOINT = 'files';
  public static FILES_SECURED_ENDPOINT = CommonsService.appendSecuredToUrl(ImagesConstants.FILES_ENDPOINT);
}
