/**
 * WebService
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export interface User {
    Username?: string;
    email?: string;
    firstname?: string;
    lastname?: string;
    userType?: User.UserTypeEnum;
}
export namespace User {
    export type UserTypeEnum = 0 | 1 | 2;
    export const UserTypeEnum = {
        NUMBER_0: 0 as UserTypeEnum,
        NUMBER_1: 1 as UserTypeEnum,
        NUMBER_2: 2 as UserTypeEnum
    }
}
