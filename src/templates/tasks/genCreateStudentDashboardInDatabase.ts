import {
  ACCELERATOR_TASKS_DB,
  CREATE_STUDENT_DASHBOARD_TASK,
} from "../../utils/constants";
import { notionClient } from "../../utils/clients";
import { RequiredTaskFields } from "../utils/requiredTaskFields";
import { addTaskProperties } from "../utils/shared";

export interface GenCreateStudentDashboardInDatabaseProps
  extends RequiredTaskFields {
  folderLink: string;
  studentEmail: string;
}
export const genCreateStudentDashboardInDatabase = async ({
  studentName,
  studentPageId,
  repPageId,
  folderLink,
  studentEmail,
}: GenCreateStudentDashboardInDatabaseProps) => {
  const keyMap = new Map<string, Array<any>>();
  const page = await notionClient.pages.create({
    parent: {
      type: "database_id",
      database_id: ACCELERATOR_TASKS_DB,
    },
    icon: {
      type: "emoji",
      emoji: "🚁",
    },
    properties: {
      ...addTaskProperties({
        studentName,
        studentPageId,
        repPageId,
        taskName: "Create Student Dashboard",
        taskId: CREATE_STUDENT_DASHBOARD_TASK,
      }),
    },
  });
  let res = await notionClient.blocks.children.append({
    block_id: page.id,
    children: [
      {
        heading_1: {
          rich_text: [
            {
              type: "text",
              text: {
                content: "Add to ",
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
            {
              type: "mention",
              mention: {
                database: {
                  id: "271a7f07-e25d-4fbd-a215-d7449802ad0b",
                },
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
        callout: {
          rich_text: [
            {
              type: "text",
              text: {
                content: `Full Name: ${studentName}\nFolder Link: ${folderLink}`,
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
          icon: {
            type: "emoji",
            emoji: "💡",
          },
          color: "gray_background",
        },
      },
      {
        heading_1: {
          rich_text: [
            {
              type: "text",
              text: {
                content: "Todos",
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
        to_do: {
          rich_text: [
            {
              type: "text",
              text: {
                content: "Add new item to Accelerator Dashboard",
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
          checked: false,
          color: "default",
        },
      },
      {
        to_do: {
          rich_text: [
            {
              type: "text",
              text: {
                content: "Link the lead field with the Student",
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
          checked: false,
          color: "default",
        },
      },
      {
        to_do: {
          rich_text: [
            {
              type: "text",
              text: {
                content:
                  "Find all instances of <Student Full Name> and replace with student’s full name",
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
          checked: false,
          color: "default",
        },
      },
      {
        to_do: {
          rich_text: [
            {
              type: "text",
              text: {
                content:
                  "Replace <Folder Link> (in Resources section) with the folder link",
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
          checked: false,
          color: "default",
        },
      },
      {
        to_do: {
          rich_text: [
            {
              type: "text",
              text: {
                content: "Share the dashboard with the student email:",
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
          checked: false,
          color: "default",
        },
      },
      {
        heading_1: {
          rich_text: [
            {
              type: "text",
              text: {
                content: "Directions",
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
          is_toggleable: true,
          color: "default",
        },
      },
    ],
  });
  keyMap.set("c735d37a78cd43a28423a7caf9b37ab9", res.results);

  let promises = [];

  promises.push(
    (async () => {
      const res = await notionClient.blocks.children.append({
        block_id: keyMap.get("c735d37a78cd43a28423a7caf9b37ab9")![8].id,
        children: [
          {
            paragraph: {
              rich_text: [
                {
                  type: "text",
                  text: {
                    content: "See ",
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
                {
                  type: "mention",
                  mention: {
                    page: {
                      id: "c735d37a-78cd-43a2-8423-a7caf9b37ab9",
                    },
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
        ],
      });
      keyMap.set("6d4f54a6-e22b-4876-893a-51cba6e6434e", res.results);
      console.log("Created: 6d4f54a6-e22b-4876-893a-51cba6e6434e");
    })()
  );

  promises.push(
    (async () => {
      const res = await notionClient.blocks.children.append({
        block_id: keyMap.get("c735d37a78cd43a28423a7caf9b37ab9")![6].id,
        children: [
          {
            to_do: {
              rich_text: [
                {
                  type: "text",
                  text: {
                    content: "Set display type to “Create Bookmark”",
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
              checked: false,
              color: "default",
            },
          },
        ],
      });
      keyMap.set("789c9aa8-3491-4d68-a062-00f28db5fa0f", res.results);
      console.log("Created: 789c9aa8-3491-4d68-a062-00f28db5fa0f");
    })()
  );

  promises.push(
    (async () => {
      const res = await notionClient.blocks.children.append({
        block_id: keyMap.get("c735d37a78cd43a28423a7caf9b37ab9")![5].id,
        children: [
          {
            bulleted_list_item: {
              rich_text: [
                {
                  type: "text",
                  text: {
                    content: "Should be done 3 times in total",
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
        ],
      });
      keyMap.set("85fddfc7-1079-4f32-bb33-61803a5e7697", res.results);
      console.log("Created: 85fddfc7-1079-4f32-bb33-61803a5e7697");
    })()
  );

  promises.push(
    (async () => {
      const res = await notionClient.blocks.children.append({
        block_id: keyMap.get("c735d37a78cd43a28423a7caf9b37ab9")![7].id,
        children: [
          {
            callout: {
              rich_text: [
                {
                  type: "text",
                  text: {
                    content: `Student Email: ${studentEmail}`,
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
              icon: {
                type: "emoji",
                emoji: "✉️",
              },
              color: "gray_background",
            },
          },
        ],
      });
      keyMap.set("b2674ba5-02a1-4c98-9c77-4bf87cfb7e1d", res.results);
      console.log("Created: b2674ba5-02a1-4c98-9c77-4bf87cfb7e1d");
    })()
  );

  await Promise.all(promises);
  console.log("Done with batch");
  promises = [];
};
