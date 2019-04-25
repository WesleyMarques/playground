import { Resource } from './resource';

export interface Serializeble {
  fromJson(json: any): Resource;
  toJson(resource: Resource): any;
}
