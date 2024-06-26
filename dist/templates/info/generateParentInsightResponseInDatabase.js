"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateParentInsightResponseInDatabase = void 0;
const clients_1 = require("../../utils/clients");
const generateParentInsightResponseInDatabase = async ({ parentId, name, whyNow, programFit, programSupport, }) => {
    const supports = programSupport.split(",").map((support) => ({
        bulleted_list_item: {
            rich_text: [
                {
                    type: "text",
                    text: {
                        content: support,
                        link: null,
                    },
                    annotations: {
                        bold: false,
                        italic: false,
                        strikethrough: false,
                        underline: false,
                        code: false,
                        color: "default",
                    },
                },
            ],
        },
    }));
    const keyMap = new Map();
    const page = await clients_1.notionClient.pages.create({
        parent: {
            type: "database_id",
            database_id: parentId,
        },
        icon: {
            type: "emoji",
            emoji: "🔗",
        },
        properties: {
            Name: {
                title: [
                    {
                        text: {
                            content: `${name}’s Parent Insight Response`,
                        },
                    },
                ],
            },
        },
    });
    let res = await clients_1.notionClient.blocks.children.append({
        block_id: page.id,
        children: [
            {
                heading_2: {
                    rich_text: [
                        {
                            type: "text",
                            text: {
                                content: "Why Now?",
                                link: null,
                            },
                            annotations: {
                                bold: false,
                                italic: false,
                                strikethrough: false,
                                underline: false,
                                code: false,
                                color: "default",
                            },
                        },
                    ],
                    is_toggleable: false,
                    color: "default",
                },
            },
            {
                paragraph: {
                    rich_text: [
                        {
                            type: "text",
                            text: {
                                content: whyNow,
                                link: null,
                            },
                            annotations: {
                                bold: false,
                                italic: false,
                                strikethrough: false,
                                underline: false,
                                code: false,
                                color: "default",
                            },
                        },
                    ],
                    color: "default",
                },
            },
            {
                heading_2: {
                    rich_text: [
                        {
                            type: "text",
                            text: {
                                content: "Program Fit",
                                link: null,
                            },
                            annotations: {
                                bold: false,
                                italic: false,
                                strikethrough: false,
                                underline: false,
                                code: false,
                                color: "default",
                            },
                        },
                    ],
                    is_toggleable: false,
                    color: "default",
                },
            },
            {
                paragraph: {
                    rich_text: [
                        {
                            type: "text",
                            text: {
                                content: programFit,
                                link: null,
                            },
                            annotations: {
                                bold: false,
                                italic: false,
                                strikethrough: false,
                                underline: false,
                                code: false,
                                color: "default",
                            },
                        },
                    ],
                    color: "default",
                },
            },
            {
                heading_2: {
                    rich_text: [
                        {
                            type: "text",
                            text: {
                                content: "Program Support",
                                link: null,
                            },
                            annotations: {
                                bold: false,
                                italic: false,
                                strikethrough: false,
                                underline: false,
                                code: false,
                                color: "default",
                            },
                        },
                    ],
                    is_toggleable: false,
                    color: "default",
                },
            },
            // notion typing check is broken
            // @ts-ignore
            ...supports,
            // @ts-ignore
            {
                paragraph: {
                    rich_text: [],
                    color: "default",
                },
            },
            // @ts-ignore
            {
                paragraph: {
                    rich_text: [],
                    color: "default",
                },
            },
        ],
    });
    keyMap.set("c4fc5284367a45519d15c9a0bad9f8bd", res.results);
};
exports.generateParentInsightResponseInDatabase = generateParentInsightResponseInDatabase;
