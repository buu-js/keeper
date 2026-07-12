export type Action =
  | "create"
  | "read"
  | "view"
  | "save"
  | "update"
  | "delete"
  | "approve"
  | "reject"
  | "export"
  | "import"

export interface RoleAccess {
  on: string
  can: Action[]
}

export interface Role {
  role: string
  inherit: string[]
  access: RoleAccess[]
}

export const roles: Role[] = [
  {
    "role": "[Role1]",
    "inherit": [],
    "access": [
      {
        "on": "resource_1",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_5",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_9",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_13",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_17",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_21",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_25",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_29",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_33",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_37",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_41",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_45",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_49",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_53",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_57",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_61",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_65",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_69",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_73",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_77",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_81",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_85",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_89",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_93",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_97",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_101",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_105",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_109",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_113",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_117",
        "can": [
          "read",
          "update",
          "reject"
        ]
      }
    ]
  },
  {
    "role": "[Role2]",
    "inherit": [
      "[Role1]"
    ],
    "access": [
      {
        "on": "resource_4",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_8",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_12",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_16",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_20",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_24",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_28",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_32",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_36",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_40",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_44",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_48",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_52",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_56",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_60",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_64",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_68",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_72",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_76",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_80",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_84",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_88",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_92",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_96",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_100",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_104",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_108",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_112",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_116",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_120",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      }
    ]
  },
  {
    "role": "[Role3]",
    "inherit": [
      "[Role2]"
    ],
    "access": [
      {
        "on": "resource_3",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_7",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_11",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_15",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_19",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_23",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_27",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_31",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_35",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_39",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_43",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_47",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_51",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_55",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_59",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_63",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_67",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_71",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_75",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_79",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_83",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_87",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_91",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_95",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_99",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_103",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_107",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_111",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_115",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_119",
        "can": [
          "view",
          "delete",
          "export"
        ]
      }
    ]
  },
  {
    "role": "[Role4]",
    "inherit": [
      "[Role3]"
    ],
    "access": [
      {
        "on": "resource_2",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_6",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_10",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_14",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_18",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_22",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_26",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_30",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_34",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_38",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_42",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_46",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_50",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_54",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_58",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_62",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_66",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_70",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_74",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_78",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_82",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_86",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_90",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_94",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_98",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_102",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_106",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_110",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_114",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_118",
        "can": [
          "read",
          "update",
          "reject"
        ]
      }
    ]
  },
  {
    "role": "[Role5]",
    "inherit": [
      "[Role4]"
    ],
    "access": [
      {
        "on": "resource_1",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_5",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_9",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_13",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_17",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_21",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_25",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_29",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_33",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_37",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_41",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_45",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_49",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_53",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_57",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_61",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_65",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_69",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_73",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_77",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_81",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_85",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_89",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_93",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_97",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_101",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_105",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_109",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_113",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_117",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      }
    ]
  },
  {
    "role": "[Role6]",
    "inherit": [
      "[Role5]"
    ],
    "access": [
      {
        "on": "resource_4",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_8",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_12",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_16",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_20",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_24",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_28",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_32",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_36",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_40",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_44",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_48",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_52",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_56",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_60",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_64",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_68",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_72",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_76",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_80",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_84",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_88",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_92",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_96",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_100",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_104",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_108",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_112",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_116",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_120",
        "can": [
          "view",
          "delete",
          "export"
        ]
      }
    ]
  },
  {
    "role": "[Role7]",
    "inherit": [
      "[Role6]"
    ],
    "access": [
      {
        "on": "resource_3",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_7",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_11",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_15",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_19",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_23",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_27",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_31",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_35",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_39",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_43",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_47",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_51",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_55",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_59",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_63",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_67",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_71",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_75",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_79",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_83",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_87",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_91",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_95",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_99",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_103",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_107",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_111",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_115",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_119",
        "can": [
          "read",
          "update",
          "reject"
        ]
      }
    ]
  },
  {
    "role": "[Role8]",
    "inherit": [
      "[Role7]",
      "[Role5]"
    ],
    "access": [
      {
        "on": "resource_2",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_6",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_10",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_14",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_18",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_22",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_26",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_30",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_34",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_38",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_42",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_46",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_50",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_54",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_58",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_62",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_66",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_70",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_74",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_78",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_82",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_86",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_90",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_94",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_98",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_102",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_106",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_110",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_114",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_118",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      }
    ]
  },
  {
    "role": "[Role9]",
    "inherit": [
      "[Role8]"
    ],
    "access": [
      {
        "on": "resource_1",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_5",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_9",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_13",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_17",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_21",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_25",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_29",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_33",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_37",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_41",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_45",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_49",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_53",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_57",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_61",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_65",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_69",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_73",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_77",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_81",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_85",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_89",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_93",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_97",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_101",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_105",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_109",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_113",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_117",
        "can": [
          "view",
          "delete",
          "export"
        ]
      }
    ]
  },
  {
    "role": "[Role10]",
    "inherit": [
      "[Role9]"
    ],
    "access": [
      {
        "on": "resource_4",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_8",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_12",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_16",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_20",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_24",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_28",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_32",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_36",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_40",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_44",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_48",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_52",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_56",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_60",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_64",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_68",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_72",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_76",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_80",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_84",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_88",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_92",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_96",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_100",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_104",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_108",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_112",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_116",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_120",
        "can": [
          "read",
          "update",
          "reject"
        ]
      }
    ]
  },
  {
    "role": "[Role11]",
    "inherit": [
      "[Role10]"
    ],
    "access": [
      {
        "on": "resource_3",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_7",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_11",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_15",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_19",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_23",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_27",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_31",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_35",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_39",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_43",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_47",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_51",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_55",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_59",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_63",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_67",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_71",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_75",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_79",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_83",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_87",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_91",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_95",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_99",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_103",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_107",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_111",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_115",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_119",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      }
    ]
  },
  {
    "role": "[Role12]",
    "inherit": [
      "[Role11]"
    ],
    "access": [
      {
        "on": "resource_2",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_6",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_10",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_14",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_18",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_22",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_26",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_30",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_34",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_38",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_42",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_46",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_50",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_54",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_58",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_62",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_66",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_70",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_74",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_78",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_82",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_86",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_90",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_94",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_98",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_102",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_106",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_110",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_114",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_118",
        "can": [
          "view",
          "delete",
          "export"
        ]
      }
    ]
  },
  {
    "role": "[Role13]",
    "inherit": [
      "[Role12]"
    ],
    "access": [
      {
        "on": "resource_1",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_5",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_9",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_13",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_17",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_21",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_25",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_29",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_33",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_37",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_41",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_45",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_49",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_53",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_57",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_61",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_65",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_69",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_73",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_77",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_81",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_85",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_89",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_93",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_97",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_101",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_105",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_109",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_113",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_117",
        "can": [
          "read",
          "update",
          "reject"
        ]
      }
    ]
  },
  {
    "role": "[Role14]",
    "inherit": [
      "[Role13]"
    ],
    "access": [
      {
        "on": "resource_4",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_8",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_12",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_16",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_20",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_24",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_28",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_32",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_36",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_40",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_44",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_48",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_52",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_56",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_60",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_64",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_68",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_72",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_76",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_80",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_84",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_88",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_92",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_96",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_100",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_104",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_108",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_112",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_116",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_120",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      }
    ]
  },
  {
    "role": "[Role15]",
    "inherit": [
      "[Role14]",
      "[Role12]"
    ],
    "access": [
      {
        "on": "resource_3",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_7",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_11",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_15",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_19",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_23",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_27",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_31",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_35",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_39",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_43",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_47",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_51",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_55",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_59",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_63",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_67",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_71",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_75",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_79",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_83",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_87",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_91",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_95",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_99",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_103",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_107",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_111",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_115",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_119",
        "can": [
          "view",
          "delete",
          "export"
        ]
      }
    ]
  },
  {
    "role": "[Role16]",
    "inherit": [
      "[Role15]"
    ],
    "access": [
      {
        "on": "resource_2",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_6",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_10",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_14",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_18",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_22",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_26",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_30",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_34",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_38",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_42",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_46",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_50",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_54",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_58",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_62",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_66",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_70",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_74",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_78",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_82",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_86",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_90",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_94",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_98",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_102",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_106",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_110",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_114",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_118",
        "can": [
          "read",
          "update",
          "reject"
        ]
      }
    ]
  },
  {
    "role": "[Role17]",
    "inherit": [
      "[Role16]"
    ],
    "access": [
      {
        "on": "resource_1",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_5",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_9",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_13",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_17",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_21",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_25",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_29",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_33",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_37",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_41",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_45",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_49",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_53",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_57",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_61",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_65",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_69",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_73",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_77",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_81",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_85",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_89",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_93",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_97",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_101",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_105",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_109",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_113",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_117",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      }
    ]
  },
  {
    "role": "[Role18]",
    "inherit": [
      "[Role17]"
    ],
    "access": [
      {
        "on": "resource_4",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_8",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_12",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_16",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_20",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_24",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_28",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_32",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_36",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_40",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_44",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_48",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_52",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_56",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_60",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_64",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_68",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_72",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_76",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_80",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_84",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_88",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_92",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_96",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_100",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_104",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_108",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_112",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_116",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_120",
        "can": [
          "view",
          "delete",
          "export"
        ]
      }
    ]
  },
  {
    "role": "[Role19]",
    "inherit": [
      "[Role18]"
    ],
    "access": [
      {
        "on": "resource_3",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_7",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_11",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_15",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_19",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_23",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_27",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_31",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_35",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_39",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_43",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_47",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_51",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_55",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_59",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_63",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_67",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_71",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_75",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_79",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_83",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_87",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_91",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_95",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_99",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_103",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_107",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_111",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_115",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_119",
        "can": [
          "read",
          "update",
          "reject"
        ]
      }
    ]
  },
  {
    "role": "[Role20]",
    "inherit": [
      "[Role19]"
    ],
    "access": [
      {
        "on": "resource_2",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_6",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_10",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_14",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_18",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_22",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_26",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_30",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_34",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_38",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_42",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_46",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_50",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_54",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_58",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_62",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_66",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_70",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_74",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_78",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_82",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_86",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_90",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_94",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_98",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_102",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_106",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_110",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_114",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_118",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      }
    ]
  },
  {
    "role": "[Role21]",
    "inherit": [
      "[Role20]"
    ],
    "access": [
      {
        "on": "resource_1",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_5",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_9",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_13",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_17",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_21",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_25",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_29",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_33",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_37",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_41",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_45",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_49",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_53",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_57",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_61",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_65",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_69",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_73",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_77",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_81",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_85",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_89",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_93",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_97",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_101",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_105",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_109",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_113",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_117",
        "can": [
          "view",
          "delete",
          "export"
        ]
      }
    ]
  },
  {
    "role": "[Role22]",
    "inherit": [
      "[Role21]",
      "[Role19]"
    ],
    "access": [
      {
        "on": "resource_4",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_8",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_12",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_16",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_20",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_24",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_28",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_32",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_36",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_40",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_44",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_48",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_52",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_56",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_60",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_64",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_68",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_72",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_76",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_80",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_84",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_88",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_92",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_96",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_100",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_104",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_108",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_112",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_116",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_120",
        "can": [
          "read",
          "update",
          "reject"
        ]
      }
    ]
  },
  {
    "role": "[Role23]",
    "inherit": [
      "[Role22]"
    ],
    "access": [
      {
        "on": "resource_3",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_7",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_11",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_15",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_19",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_23",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_27",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_31",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_35",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_39",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_43",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_47",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_51",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_55",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_59",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_63",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_67",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_71",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_75",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_79",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_83",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_87",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_91",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_95",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_99",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_103",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_107",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_111",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_115",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_119",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      }
    ]
  },
  {
    "role": "[Role24]",
    "inherit": [
      "[Role23]"
    ],
    "access": [
      {
        "on": "resource_2",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_6",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_10",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_14",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_18",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_22",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_26",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_30",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_34",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_38",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_42",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_46",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_50",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_54",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_58",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_62",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_66",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_70",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_74",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_78",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_82",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_86",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_90",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_94",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_98",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_102",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_106",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_110",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_114",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_118",
        "can": [
          "view",
          "delete",
          "export"
        ]
      }
    ]
  },
  {
    "role": "[Role25]",
    "inherit": [
      "[Role24]"
    ],
    "access": [
      {
        "on": "resource_1",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_5",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_9",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_13",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_17",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_21",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_25",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_29",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_33",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_37",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_41",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_45",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_49",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_53",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_57",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_61",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_65",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_69",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_73",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_77",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_81",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_85",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_89",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_93",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_97",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_101",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_105",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_109",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_113",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_117",
        "can": [
          "read",
          "update",
          "reject"
        ]
      }
    ]
  },
  {
    "role": "[Role26]",
    "inherit": [
      "[Role25]"
    ],
    "access": [
      {
        "on": "resource_4",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_8",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_12",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_16",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_20",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_24",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_28",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_32",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_36",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_40",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_44",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_48",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_52",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_56",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_60",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_64",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_68",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_72",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_76",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_80",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_84",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_88",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_92",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_96",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_100",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_104",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_108",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_112",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_116",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_120",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      }
    ]
  },
  {
    "role": "[Role27]",
    "inherit": [
      "[Role26]"
    ],
    "access": [
      {
        "on": "resource_3",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_7",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_11",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_15",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_19",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_23",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_27",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_31",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_35",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_39",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_43",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_47",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_51",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_55",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_59",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_63",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_67",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_71",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_75",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_79",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_83",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_87",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_91",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_95",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_99",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_103",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_107",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_111",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_115",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_119",
        "can": [
          "view",
          "delete",
          "export"
        ]
      }
    ]
  },
  {
    "role": "[Role28]",
    "inherit": [
      "[Role27]"
    ],
    "access": [
      {
        "on": "resource_2",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_6",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_10",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_14",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_18",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_22",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_26",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_30",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_34",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_38",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_42",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_46",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_50",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_54",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_58",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_62",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_66",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_70",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_74",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_78",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_82",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_86",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_90",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_94",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_98",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_102",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_106",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_110",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_114",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_118",
        "can": [
          "read",
          "update",
          "reject"
        ]
      }
    ]
  },
  {
    "role": "[Role29]",
    "inherit": [
      "[Role28]",
      "[Role26]"
    ],
    "access": [
      {
        "on": "resource_1",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_5",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_9",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_13",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_17",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_21",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_25",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_29",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_33",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_37",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_41",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_45",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_49",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_53",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_57",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_61",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_65",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_69",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_73",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_77",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_81",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_85",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_89",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_93",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_97",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_101",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_105",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_109",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_113",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_117",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      }
    ]
  },
  {
    "role": "[Role30]",
    "inherit": [
      "[Role29]"
    ],
    "access": [
      {
        "on": "resource_4",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_8",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_12",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_16",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_20",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_24",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_28",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_32",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_36",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_40",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_44",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_48",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_52",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_56",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_60",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_64",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_68",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_72",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_76",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_80",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_84",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_88",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_92",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_96",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_100",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_104",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_108",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_112",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_116",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_120",
        "can": [
          "view",
          "delete",
          "export"
        ]
      }
    ]
  },
  {
    "role": "[Role31]",
    "inherit": [
      "[Role30]"
    ],
    "access": [
      {
        "on": "resource_3",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_7",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_11",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_15",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_19",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_23",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_27",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_31",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_35",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_39",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_43",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_47",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_51",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_55",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_59",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_63",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_67",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_71",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_75",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_79",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_83",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_87",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_91",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_95",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_99",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_103",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_107",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_111",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_115",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_119",
        "can": [
          "read",
          "update",
          "reject"
        ]
      }
    ]
  },
  {
    "role": "[Role32]",
    "inherit": [
      "[Role31]"
    ],
    "access": [
      {
        "on": "resource_2",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_6",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_10",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_14",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_18",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_22",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_26",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_30",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_34",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_38",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_42",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_46",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_50",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_54",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_58",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_62",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_66",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_70",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_74",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_78",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_82",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_86",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_90",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_94",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_98",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_102",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_106",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_110",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_114",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_118",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      }
    ]
  },
  {
    "role": "[Role33]",
    "inherit": [
      "[Role32]"
    ],
    "access": [
      {
        "on": "resource_1",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_5",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_9",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_13",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_17",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_21",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_25",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_29",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_33",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_37",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_41",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_45",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_49",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_53",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_57",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_61",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_65",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_69",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_73",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_77",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_81",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_85",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_89",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_93",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_97",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_101",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_105",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_109",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_113",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_117",
        "can": [
          "view",
          "delete",
          "export"
        ]
      }
    ]
  },
  {
    "role": "[Role34]",
    "inherit": [
      "[Role33]"
    ],
    "access": [
      {
        "on": "resource_4",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_8",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_12",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_16",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_20",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_24",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_28",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_32",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_36",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_40",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_44",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_48",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_52",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_56",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_60",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_64",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_68",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_72",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_76",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_80",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_84",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_88",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_92",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_96",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_100",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_104",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_108",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_112",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_116",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_120",
        "can": [
          "read",
          "update",
          "reject"
        ]
      }
    ]
  },
  {
    "role": "[Role35]",
    "inherit": [
      "[Role34]"
    ],
    "access": [
      {
        "on": "resource_3",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_7",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_11",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_15",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_19",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_23",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_27",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_31",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_35",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_39",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_43",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_47",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_51",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_55",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_59",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_63",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_67",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_71",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_75",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_79",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_83",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_87",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_91",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_95",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_99",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_103",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_107",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_111",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_115",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_119",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      }
    ]
  },
  {
    "role": "[Role36]",
    "inherit": [
      "[Role35]",
      "[Role33]"
    ],
    "access": [
      {
        "on": "resource_2",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_6",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_10",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_14",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_18",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_22",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_26",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_30",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_34",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_38",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_42",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_46",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_50",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_54",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_58",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_62",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_66",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_70",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_74",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_78",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_82",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_86",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_90",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_94",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_98",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_102",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_106",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_110",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_114",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_118",
        "can": [
          "view",
          "delete",
          "export"
        ]
      }
    ]
  },
  {
    "role": "[Role37]",
    "inherit": [
      "[Role36]"
    ],
    "access": [
      {
        "on": "resource_1",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_5",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_9",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_13",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_17",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_21",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_25",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_29",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_33",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_37",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_41",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_45",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_49",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_53",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_57",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_61",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_65",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_69",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_73",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_77",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_81",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_85",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_89",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_93",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_97",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_101",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_105",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_109",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_113",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_117",
        "can": [
          "read",
          "update",
          "reject"
        ]
      }
    ]
  },
  {
    "role": "[Role38]",
    "inherit": [
      "[Role37]"
    ],
    "access": [
      {
        "on": "resource_4",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_8",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_12",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_16",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_20",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_24",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_28",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_32",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_36",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_40",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_44",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_48",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_52",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_56",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_60",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_64",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_68",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_72",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_76",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_80",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_84",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_88",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_92",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_96",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_100",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_104",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_108",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_112",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_116",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_120",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      }
    ]
  },
  {
    "role": "[Role39]",
    "inherit": [
      "[Role38]"
    ],
    "access": [
      {
        "on": "resource_3",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_7",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_11",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_15",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_19",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_23",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_27",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_31",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_35",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_39",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_43",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_47",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_51",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_55",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_59",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_63",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_67",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_71",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_75",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_79",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_83",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_87",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_91",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_95",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_99",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_103",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_107",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_111",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_115",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_119",
        "can": [
          "view",
          "delete",
          "export"
        ]
      }
    ]
  },
  {
    "role": "[Role40]",
    "inherit": [
      "[Role39]"
    ],
    "access": [
      {
        "on": "resource_2",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_6",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_10",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_14",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_18",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_22",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_26",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_30",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_34",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_38",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_42",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_46",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_50",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_54",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_58",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_62",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_66",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_70",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_74",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_78",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_82",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_86",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_90",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_94",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_98",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_102",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_106",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_110",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_114",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_118",
        "can": [
          "read",
          "update",
          "reject"
        ]
      }
    ]
  },
  {
    "role": "[Role41]",
    "inherit": [
      "[Role40]"
    ],
    "access": [
      {
        "on": "resource_1",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_5",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_9",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_13",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_17",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_21",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_25",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_29",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_33",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_37",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_41",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_45",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_49",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_53",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_57",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_61",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_65",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_69",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_73",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_77",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_81",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_85",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_89",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_93",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_97",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_101",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_105",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_109",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_113",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_117",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      }
    ]
  },
  {
    "role": "[Role42]",
    "inherit": [
      "[Role41]"
    ],
    "access": [
      {
        "on": "resource_4",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_8",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_12",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_16",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_20",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_24",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_28",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_32",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_36",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_40",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_44",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_48",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_52",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_56",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_60",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_64",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_68",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_72",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_76",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_80",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_84",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_88",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_92",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_96",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_100",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_104",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_108",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_112",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_116",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_120",
        "can": [
          "view",
          "delete",
          "export"
        ]
      }
    ]
  },
  {
    "role": "[Role43]",
    "inherit": [
      "[Role42]",
      "[Role40]"
    ],
    "access": [
      {
        "on": "resource_3",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_7",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_11",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_15",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_19",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_23",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_27",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_31",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_35",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_39",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_43",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_47",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_51",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_55",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_59",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_63",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_67",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_71",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_75",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_79",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_83",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_87",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_91",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_95",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_99",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_103",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_107",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_111",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_115",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_119",
        "can": [
          "read",
          "update",
          "reject"
        ]
      }
    ]
  },
  {
    "role": "[Role44]",
    "inherit": [
      "[Role43]"
    ],
    "access": [
      {
        "on": "resource_2",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_6",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_10",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_14",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_18",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_22",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_26",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_30",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_34",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_38",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_42",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_46",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_50",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_54",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_58",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_62",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_66",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_70",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_74",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_78",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_82",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_86",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_90",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_94",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_98",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_102",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_106",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_110",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_114",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_118",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      }
    ]
  },
  {
    "role": "[Role45]",
    "inherit": [
      "[Role44]"
    ],
    "access": [
      {
        "on": "resource_1",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_5",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_9",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_13",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_17",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_21",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_25",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_29",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_33",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_37",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_41",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_45",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_49",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_53",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_57",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_61",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_65",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_69",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_73",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_77",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_81",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_85",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_89",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_93",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_97",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_101",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_105",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_109",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_113",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_117",
        "can": [
          "view",
          "delete",
          "export"
        ]
      }
    ]
  },
  {
    "role": "[Role46]",
    "inherit": [
      "[Role45]"
    ],
    "access": [
      {
        "on": "resource_4",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_8",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_12",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_16",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_20",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_24",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_28",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_32",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_36",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_40",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_44",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_48",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_52",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_56",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_60",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_64",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_68",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_72",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_76",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_80",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_84",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_88",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_92",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_96",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_100",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_104",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_108",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_112",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_116",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_120",
        "can": [
          "read",
          "update",
          "reject"
        ]
      }
    ]
  },
  {
    "role": "[Role47]",
    "inherit": [
      "[Role46]"
    ],
    "access": [
      {
        "on": "resource_3",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_7",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_11",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_15",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_19",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_23",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_27",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_31",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_35",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_39",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_43",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_47",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_51",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_55",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_59",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_63",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_67",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_71",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_75",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_79",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_83",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_87",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_91",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_95",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_99",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_103",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_107",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_111",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_115",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_119",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      }
    ]
  },
  {
    "role": "[Role48]",
    "inherit": [
      "[Role47]"
    ],
    "access": [
      {
        "on": "resource_2",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_6",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_10",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_14",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_18",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_22",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_26",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_30",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_34",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_38",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_42",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_46",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_50",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_54",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_58",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_62",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_66",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_70",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_74",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_78",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_82",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_86",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_90",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_94",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_98",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_102",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_106",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_110",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_114",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_118",
        "can": [
          "view",
          "delete",
          "export"
        ]
      }
    ]
  },
  {
    "role": "[Role49]",
    "inherit": [
      "[Role48]"
    ],
    "access": [
      {
        "on": "resource_1",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_5",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_9",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_13",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_17",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_21",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_25",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_29",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_33",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_37",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_41",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_45",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_49",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_53",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_57",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_61",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_65",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_69",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_73",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_77",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_81",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_85",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_89",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_93",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_97",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_101",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_105",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_109",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_113",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_117",
        "can": [
          "read",
          "update",
          "reject"
        ]
      }
    ]
  },
  {
    "role": "[Role50]",
    "inherit": [
      "[Role49]",
      "[Role47]"
    ],
    "access": [
      {
        "on": "resource_4",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_8",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_12",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_16",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_20",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_24",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_28",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_32",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_36",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_40",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_44",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_48",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_52",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_56",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_60",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_64",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_68",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_72",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_76",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_80",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_84",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_88",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_92",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_96",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_100",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_104",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_108",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      },
      {
        "on": "resource_112",
        "can": [
          "view",
          "delete",
          "export"
        ]
      },
      {
        "on": "resource_116",
        "can": [
          "read",
          "update",
          "reject"
        ]
      },
      {
        "on": "resource_120",
        "can": [
          "create",
          "save",
          "approve",
          "import"
        ]
      }
    ]
  }
]
