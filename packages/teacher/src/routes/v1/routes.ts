/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { TsoaRoute, fetchMiddlewares, ExpressTemplateService } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { TeacherController } from './../../controllers/teacher.controller';
import type { Request as ExRequest, Response as ExResponse, RequestHandler, Router } from 'express';



// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "ITeacher": {
        "dataType": "refObject",
        "properties": {
            "first_name": {"dataType":"string","required":true},
            "last_name": {"dataType":"string","required":true},
            "picture": {"dataType":"string","required":true},
            "phone_number": {"dataType":"string","required":true},
            "subject": {"dataType":"string","required":true},
            "is_degree": {"dataType":"boolean","required":true},
            "university": {"dataType":"string","required":true},
            "year_experience": {"dataType":"double","required":true},
            "type_degree": {"dataType":"string","required":true},
            "specialization": {"dataType":"string","required":true},
            "bio": {"dataType":"string","required":true},
            "teacher_experience": {"dataType":"string","required":true},
            "motivation": {"dataType":"string","required":true},
            "date_available": {"dataType":"object","required":true},
            "price": {"dataType":"double","required":true},
            "certificate": {"dataType":"string","required":true},
            "video": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Paginate": {
        "dataType": "refObject",
        "properties": {
            "pageSize": {"dataType":"double","required":true},
            "pageNumber": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new ExpressTemplateService(models, {"noImplicitAdditionalProperties":"throw-on-extras","bodyCoercion":true});

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

export function RegisterRoutes(app: Router) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
        app.get('/v1/teaches/teachers-list',
            ...(fetchMiddlewares<RequestHandler>(TeacherController)),
            ...(fetchMiddlewares<RequestHandler>(TeacherController.prototype.TeacherList)),

            async function TeacherController_TeacherList(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    options: {"in":"queries","name":"options","required":true,"ref":"Paginate"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new TeacherController();

              await templateService.apiHandler({
                methodName: 'TeacherList',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/v1/teaches/teacher-signup',
            ...(fetchMiddlewares<RequestHandler>(TeacherController)),
            ...(fetchMiddlewares<RequestHandler>(TeacherController.prototype.TeacherSingup)),

            async function TeacherController_TeacherSingup(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"ref":"ITeacher"},
                    req: {"in":"request","name":"req","required":true,"dataType":"object"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new TeacherController();

              await templateService.apiHandler({
                methodName: 'TeacherSingup',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/teaches/teacher-profile/:id',
            ...(fetchMiddlewares<RequestHandler>(TeacherController)),
            ...(fetchMiddlewares<RequestHandler>(TeacherController.prototype.FindOneTeacher)),

            async function TeacherController_FindOneTeacher(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    id: {"in":"path","name":"id","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new TeacherController();

              await templateService.apiHandler({
                methodName: 'FindOneTeacher',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
