"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createDatabaseInPage_1 = require("../templates/createDatabaseInPage");
const genConductC1MeetingInDatabase_1 = require("../templates/tasks/genConductC1MeetingInDatabase");
const generateContactInfoInDatabase_1 = require("../templates/info/generateContactInfoInDatabase");
const routers_1 = require("./routers");
// For some reason, need GET for Make.com to behave
// example url: http://localhost:8080/registration/conduct?studentId=kz7zh7t2aw&studentFullName=John%20Doe&studentEmail=johndoe@example.com&studentNumber=+19254873772&parentEmail=parent@example.com&parentNumber=+19254873772&repPageId=cece3b6098b3469ebd2261ebd7319aad&leadPageId=3eca26b8664a478a8e7060967dd79c3f&repId=737019&grade=8th&time=2021-10-01T00:00:00.000Z
routers_1.registrationRouter.get("/conduct", (0, routers_1.asyncHandler)(async (req, res) => {
    const validatedParams = (0, routers_1.checkQueryParams)(req, [
        "studentId",
        "studentName",
        "studentEmail",
        "studentNumber",
        "parentEmail",
        "parentNumber",
        "repPageId",
        "studentPageId",
        "repId",
        "grade",
        "time",
    ]);
    if (!validatedParams.isValid)
        return res.status(400).json({
            message: validatedParams.error,
        });
    await (0, genConductC1MeetingInDatabase_1.genConductC1MeetingInDatabase)(validatedParams.params);
    return res.json({
        message: "task created",
    });
}));
routers_1.registrationRouter.get("/crm", (0, routers_1.asyncHandler)(async (req, res) => {
    const validatedParams = (0, routers_1.checkQueryParams)(req, [
        "pageId",
        "name",
    ]);
    if (!validatedParams.isValid)
        return res.status(400).json({
            message: validatedParams.error,
        });
    await (0, createDatabaseInPage_1.createDatabaseInPage)(validatedParams.params);
    return res.json({
        message: "table created, page updated",
    });
}));
routers_1.registrationRouter.get("/contact", (0, routers_1.asyncHandler)(async (req, res) => {
    const validatedParams = (0, routers_1.checkQueryParams)(req, [
        "parentId",
        "studentEmail",
        "studentPhone",
        "parentEmail",
        "parentPhone",
        "studentName",
        "parentName",
    ]);
    if (!validatedParams.isValid)
        return res.status(400).json({
            message: validatedParams.error,
        });
    await (0, generateContactInfoInDatabase_1.generateContactInfoInDatabase)(validatedParams.params);
    return res.json({
        message: "contact info created",
    });
}));
