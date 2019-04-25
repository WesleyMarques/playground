import { Resource } from 'src/app/shared/resource';

export interface Serializeble {
  fromJson(json: any): Resource;
  toJson(resource: Resource): any;
}
