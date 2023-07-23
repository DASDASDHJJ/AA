/**
 * do NOT change anything of this file!
 */
export default {
  "nested": {
    "lq": {
      "nested": {
        "NotifyRoomGameStart": {
          "fields": {
            "game_url": {
              "type": "string",
              "id": 1
            },
            "connect_token": {
              "type": "string",
              "id": 2
            },
            "game_uuid": {
              "type": "string",
              "id": 3
            },
            "location": {
              "type": "string",
              "id": 4
            }
          }
        },
        "NotifyMatchGameStart": {
          "fields": {
            "game_url": {
              "type": "string",
              "id": 1
            },
            "connect_token": {
              "type": "string",
              "id": 2
            },
            "game_uuid": {
              "type": "string",
              "id": 3
            },
            "match_mode_id": {
              "type": "uint32",
              "id": 4
            },
            "location": {
              "type": "string",
              "id": 5
            }
          }
        },
        "NotifyRoomPlayerReady": {
          "fields": {
            "account_id": {
              "type": "uint32",
              "id": 1
            },
            "ready": {
              "type": "bool",
              "id": 2
            }
          }
        },
        "NotifyRoomPlayerUpdate": {
          "fields": {
            "update_list": {
              "rule": "repeated",
              "type": "PlayerBaseView",
              "id": 1
            },
            "remove_list": {
              "rule": "repeated",
              "type": "uint32",
              "id": 2
            },
            "owner_id": {
              "type": "uint32",
              "id": 3
            },
            "robot_count": {
              "type": "uint32",
              "id": 4
            }
          }
        },
        "NotifyRoomKickOut": {
          "fields": {}
        },
        "NotifyMatchTimeout": {
          "fields": {}
        },
        "NotifyFriendStateChange": {
          "fields": {
            "target_id": {
              "type": "uint32",
              "id": 1
            },
            "active_state": {
              "type": "AccountActiveState",
              "id": 2
            }
          }
        },
        "NotifyFriendViewChange": {
          "fields": {
            "target_id": {
              "type": "uint32",
              "id": 1
            },
            "base": {
              "type": "PlayerBaseView",
              "id": 2
            }
          }
        },
        "NotifyFriendChange": {
          "fields": {
            "account_id": {
              "type": "uint32",
              "id": 1
            },
            "type": {
              "type": "uint32",
              "id": 2
            },
            "friend": {
              "type": "Friend",
              "id": 3
            }
          }
        },
        "NotifyNewFriendApply": {
          "fields": {
            "account_id": {
              "type": "uint32",
              "id": 1
            },
            "apply_time": {
              "type": "uint32",
              "id": 2
            },
            "removed_id": {
              "type": "uint32",
              "id": 3
            }
          }
        },
        "NotifyClientMessage": {
          "fields": {
            "sender": {
              "type": "PlayerBaseView",
              "id": 1
            },
            "type": {
              "type": "uint32",
              "id": 2
            },
            "content": {
              "type": "string",
              "id": 3
            }
          }
        },
        "NotifyAccountUpdate": {
          "fields": {
            "update": {
              "type": "AccountUpdate",
              "id": 1
            }
          }
        },
        "NotifyAnotherLogin": {
          "fields": {}
        },
        "NotifyAccountLogout": {
          "fields": {}
        },
        "NotifyAnnouncementUpdate": {
          "fields": {
            "announcements": {
              "rule": "repeated",
              "type": "Announcement",
              "id": 1
            },
            "sort": {
              "rule": "repeated",
              "type": "uint32",
              "id": 2
            }
          }
        },
        "NotifyNewMail": {
          "fields": {
            "mail": {
              "type": "Mail",
              "id": 1
            }
          }
        },
        "NotifyDeleteMail": {
          "fields": {
            "mail_id_list": {
              "rule": "repeated",
              "type": "uint32",
              "id": 1
            }
          }
        },
        "NotifyReviveCoinUpdate": {
          "fields": {
            "has_gained": {
              "type": "bool",
              "id": 1
            }
          }
        },
        "NotifyDailyTaskUpdate": {
          "fields": {
            "progresses": {
              "rule": "repeated",
              "type": "TaskProgress",
              "id": 1
            },
            "max_daily_task_count": {
              "type": "uint32",
              "id": 2
            },
            "refresh_count": {
              "type": "uint32",
              "id": 3
            }
          }
        },
        "NotifyActivityTaskUpdate": {
          "fields": {
            "progresses": {
              "rule": "repeated",
              "type": "TaskProgress",
              "id": 1
            }
          }
        },
        "NotifyNewComment": {
          "fields": {}
        },
        "NotifyRollingNotice": {
          "fields": {
            "notice": {
              "type": "RollingNotice",
              "id": 1
            }
          }
        },
        "NotifyGiftSendRefresh": {
          "fields": {}
        },
        "NotifyShopUpdate": {
          "fields": {
            "shop_info": {
              "type": "ShopInfo",
              "id": 1
            }
          }
        },
        "NotifyVipLevelChange": {
          "fields": {
            "gift_limit": {
              "type": "uint32",
              "id": 1
            },
            "friend_max_count": {
              "type": "uint32",
              "id": 2
            },
            "zhp_free_refresh_limit": {
              "type": "uint32",
              "id": 3
            },
            "zhp_cost_refresh_limit": {
              "type": "uint32",
              "id": 4
            },
            "buddy_bonus": {
              "type": "float",
              "id": 5
            },
            "record_collect_limit": {
              "type": "uint32",
              "id": 6
            }
          }
        },
        "NotifyServerSetting": {
          "fields": {
            "settings": {
              "type": "ServerSettings",
              "id": 1
            }
          }
        },
        "NotifyPayResult": {
          "fields": {
            "pay_result": {
              "type": "uint32",
              "id": 1
            },
            "order_id": {
              "type": "string",
              "id": 2
            },
            "goods_id": {
              "type": "uint32",
              "id": 3
            }
          }
        },
        "NotifyCustomContestAccountMsg": {
          "fields": {
            "unique_id": {
              "type": "uint32",
              "id": 1
            },
            "account_id": {
              "type": "uint32",
              "id": 2
            },
            "sender": {
              "type": "string",
              "id": 3
            },
            "content": {
              "type": "string",
              "id": 4
            }
          }
        },
        "NotifyCustomContestSystemMsg": {
          "fields": {
            "unique_id": {
              "type": "uint32",
              "id": 1
            },
            "type": {
              "type": "uint32",
              "id": 2
            },
            "uuid": {
              "type": "string",
              "id": 3
            },
            "game_start": {
              "type": "CustomizedContestGameStart",
              "id": 4
            },
            "game_end": {
              "type": "CustomizedContestGameEnd",
              "id": 5
            }
          }
        },
        "NotifyCustomContestState": {
          "fields": {
            "unique_id": {
              "type": "uint32",
              "id": 1
            },
            "state": {
              "type": "uint32",
              "id": 2
            }
          }
        },
        "NotifyActivityChange": {
          "fields": {
            "new_activities": {
              "rule": "repeated",
              "type": "Activity",
              "id": 1
            },
            "end_activities": {
              "rule": "repeated",
              "type": "uint32",
              "id": 2
            }
          }
        },
        "Error": {
          "fields": {
            "code": {
              "type": "uint32",
              "id": 1
            },
            "u32_params": {
              "rule": "repeated",
              "type": "uint32",
              "id": 2
            },
            "str_params": {
              "rule": "repeated",
              "type": "string",
              "id": 3
            },
            "json_param": {
              "type": "string",
              "id": 4
            }
          }
        },
        "Wrapper": {
          "fields": {
            "name": {
              "type": "string",
              "id": 1
            },
            "data": {
              "type": "bytes",
              "id": 2
            }
          }
        },
        "NetworkEndpoint": {
          "fields": {
            "family": {
              "type": "string",
              "id": 1
            },
            "address": {
              "type": "string",
              "id": 2
            },
            "port": {
              "type": "uint32",
              "id": 3
            }
          }
        },
        "ReqCommon": {
          "fields": {}
        },
        "ResCommon": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            }
          }
        },
        "ResAccountUpdate": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "update": {
              "type": "AccountUpdate",
              "id": 2
            }
          }
        },
        "AntiAddiction": {
          "fields": {
            "online_duration": {
              "type": "uint32",
              "id": 1
            }
          }
        },
        "AccountMahjongStatistic": {
          "fields": {
            "final_position_counts": {
              "rule": "repeated",
              "type": "uint32",
              "id": 1
            },
            "recent_round": {
              "type": "RoundSummary",
              "id": 2
            },
            "recent_hu": {
              "type": "HuSummary",
              "id": 3
            },
            "highest_hu": {
              "type": "HighestHuRecord",
              "id": 4
            },
            "recent_20_hu_summary": {
              "type": "Liqi20Summary",
              "id": 6
            },
            "recent_10_hu_summary": {
              "type": "LiQi10Summary",
              "id": 7
            },
            "recent_10_game_result": {
              "rule": "repeated",
              "type": "GameResult",
              "id": 8
            }
          },
          "nested": {
            "RoundSummary": {
              "fields": {
                "total_count": {
                  "type": "uint32",
                  "id": 1
                },
                "rong_count": {
                  "type": "uint32",
                  "id": 2
                },
                "zimo_count": {
                  "type": "uint32",
                  "id": 3
                },
                "fangchong_count": {
                  "type": "uint32",
                  "id": 4
                }
              }
            },
            "HuSummary": {
              "fields": {
                "total_count": {
                  "type": "uint32",
                  "id": 1
                },
                "dora_round_count": {
                  "type": "uint32",
                  "id": 2
                },
                "total_fan": {
                  "type": "uint32",
                  "id": 3
                }
              }
            },
            "HighestHuRecord": {
              "fields": {
                "fanshu": {
                  "type": "uint32",
                  "id": 1
                },
                "doranum": {
                  "type": "uint32",
                  "id": 2
                },
                "title": {
                  "type": "string",
                  "id": 3
                },
                "hands": {
                  "rule": "repeated",
                  "type": "string",
                  "id": 4
                },
                "ming": {
                  "rule": "repeated",
                  "type": "string",
                  "id": 5
                },
                "hupai": {
                  "type": "string",
                  "id": 6
                },
                "title_id": {
                  "type": "uint32",
                  "id": 7
                }
              }
            },
            "Liqi20Summary": {
              "fields": {
                "total_count": {
                  "type": "uint32",
                  "id": 1
                },
                "total_lidora_count": {
                  "type": "uint32",
                  "id": 2
                },
                "average_hu_point": {
                  "type": "uint32",
                  "id": 3
                }
              }
            },
            "LiQi10Summary": {
              "fields": {
                "total_xuanshang": {
                  "type": "uint32",
                  "id": 1
                },
                "total_fanshu": {
                  "type": "uint32",
                  "id": 2
                }
              }
            },
            "GameResult": {
              "fields": {
                "rank": {
                  "type": "uint32",
                  "id": 1
                },
                "final_point": {
                  "type": "int32",
                  "id": 2
                }
              }
            }
          }
        },
        "AccountStatisticData": {
          "fields": {
            "mahjong_category": {
              "type": "uint32",
              "id": 1
            },
            "game_category": {
              "type": "uint32",
              "id": 2
            },
            "statistic": {
              "type": "AccountMahjongStatistic",
              "id": 3
            }
          }
        },
        "AccountLevel": {
          "fields": {
            "id": {
              "type": "uint32",
              "id": 1
            },
            "score": {
              "type": "uint32",
              "id": 2
            }
          }
        },
        "Account": {
          "fields": {
            "account_id": {
              "type": "uint32",
              "id": 1
            },
            "nickname": {
              "type": "string",
              "id": 2
            },
            "login_time": {
              "type": "uint32",
              "id": 3
            },
            "logout_time": {
              "type": "uint32",
              "id": 4
            },
            "room_id": {
              "type": "uint32",
              "id": 5
            },
            "anti_addiction": {
              "type": "AntiAddiction",
              "id": 6
            },
            "title": {
              "type": "uint32",
              "id": 7
            },
            "signature": {
              "type": "string",
              "id": 8
            },
            "email": {
              "type": "string",
              "id": 9
            },
            "email_verify": {
              "type": "uint32",
              "id": 10
            },
            "gold": {
              "type": "uint32",
              "id": 11
            },
            "diamond": {
              "type": "uint32",
              "id": 12
            },
            "avatar_id": {
              "type": "uint32",
              "id": 13
            },
            "vip": {
              "type": "uint32",
              "id": 14
            },
            "birthday": {
              "type": "int32",
              "id": 15
            },
            "phone": {
              "type": "string",
              "id": 16
            },
            "phone_verify": {
              "type": "uint32",
              "id": 17
            },
            "platform_diamond": {
              "rule": "repeated",
              "type": "PlatformDiamond",
              "id": 18
            },
            "level": {
              "type": "AccountLevel",
              "id": 21
            },
            "level3": {
              "type": "AccountLevel",
              "id": 22
            },
            "avatar_frame": {
              "type": "uint32",
              "id": 23
            }
          },
          "nested": {
            "PlatformDiamond": {
              "fields": {
                "id": {
                  "type": "uint32",
                  "id": 1
                },
                "count": {
                  "type": "uint32",
                  "id": 2
                }
              }
            }
          }
        },
        "AccountOwnerData": {
          "fields": {
            "unlock_characters": {
              "rule": "repeated",
              "type": "uint32",
              "id": 1
            }
          }
        },
        "AccountUpdate": {
          "fields": {
            "numerical": {
              "rule": "repeated",
              "type": "NumericalUpdate",
              "id": 1
            },
            "character": {
              "type": "CharacterUpdate",
              "id": 2
            },
            "bag": {
              "type": "BagUpdate",
              "id": 3
            },
            "achievement": {
              "type": "AchievementUpdate",
              "id": 4
            },
            "shilian": {
              "type": "AccountShiLian",
              "id": 5
            },
            "daily_task": {
              "type": "DailyTaskUpdate",
              "id": 6
            },
            "title": {
              "type": "TitleUpdate",
              "id": 7
            },
            "new_recharged_list": {
              "rule": "repeated",
              "type": "uint32",
              "id": 8
            },
            "activity_task": {
              "type": "ActivityTaskUpdate",
              "id": 9
            },
            "activity_flip_task": {
              "type": "ActivityFlipTaskUpdate",
              "id": 10
            }
          },
          "nested": {
            "NumericalUpdate": {
              "fields": {
                "id": {
                  "type": "uint32",
                  "id": 1
                },
                "final": {
                  "type": "uint32",
                  "id": 3
                }
              }
            },
            "CharacterUpdate": {
              "fields": {
                "characters": {
                  "rule": "repeated",
                  "type": "Character",
                  "id": 2
                },
                "skins": {
                  "rule": "repeated",
                  "type": "uint32",
                  "id": 3
                }
              }
            },
            "AchievementUpdate": {
              "fields": {
                "progresses": {
                  "rule": "repeated",
                  "type": "AchievementProgress",
                  "id": 1
                }
              }
            },
            "DailyTaskUpdate": {
              "fields": {
                "progresses": {
                  "rule": "repeated",
                  "type": "TaskProgress",
                  "id": 1
                }
              }
            },
            "TitleUpdate": {
              "fields": {
                "new_titles": {
                  "rule": "repeated",
                  "type": "uint32",
                  "id": 1
                }
              }
            },
            "ActivityTaskUpdate": {
              "fields": {
                "progresses": {
                  "rule": "repeated",
                  "type": "TaskProgress",
                  "id": 1
                }
              }
            },
            "ActivityFlipTaskUpdate": {
              "fields": {
                "progresses": {
                  "rule": "repeated",
                  "type": "TaskProgress",
                  "id": 1
                }
              }
            }
          }
        },
        "GameMetaData": {
          "fields": {
            "room_id": {
              "type": "uint32",
              "id": 1
            },
            "mode_id": {
              "type": "uint32",
              "id": 2
            },
            "contest_uid": {
              "type": "uint32",
              "id": 3
            }
          }
        },
        "AccountPlayingGame": {
          "fields": {
            "game_uuid": {
              "type": "string",
              "id": 1
            },
            "category": {
              "type": "uint32",
              "id": 2
            },
            "meta": {
              "type": "GameMetaData",
              "id": 3
            }
          }
        },
        "AccountCacheView": {
          "fields": {
            "cache_version": {
              "type": "uint32",
              "id": 1
            },
            "account_id": {
              "type": "uint32",
              "id": 2
            },
            "nickname": {
              "type": "string",
              "id": 3
            },
            "login_time": {
              "type": "uint32",
              "id": 4
            },
            "logout_time": {
              "type": "uint32",
              "id": 5
            },
            "is_online": {
              "type": "bool",
              "id": 6
            },
            "room_id": {
              "type": "uint32",
              "id": 7
            },
            "title": {
              "type": "uint32",
              "id": 8
            },
            "avatar_id": {
              "type": "uint32",
              "id": 9
            },
            "vip": {
              "type": "uint32",
              "id": 10
            },
            "level": {
              "type": "AccountLevel",
              "id": 11
            },
            "playing_game": {
              "type": "AccountPlayingGame",
              "id": 12
            },
            "level3": {
              "type": "AccountLevel",
              "id": 13
            },
            "avatar_frame": {
              "type": "uint32",
              "id": 14
            }
          }
        },
        "PlayerBaseView": {
          "fields": {
            "account_id": {
              "type": "uint32",
              "id": 1
            },
            "avatar_id": {
              "type": "uint32",
              "id": 2
            },
            "title": {
              "type": "uint32",
              "id": 3
            },
            "nickname": {
              "type": "string",
              "id": 4
            },
            "level": {
              "type": "AccountLevel",
              "id": 5
            },
            "level3": {
              "type": "AccountLevel",
              "id": 6
            },
            "avatar_frame": {
              "type": "uint32",
              "id": 7
            }
          }
        },
        "PlayerGameView": {
          "fields": {
            "account_id": {
              "type": "uint32",
              "id": 1
            },
            "avatar_id": {
              "type": "uint32",
              "id": 2
            },
            "title": {
              "type": "uint32",
              "id": 3
            },
            "nickname": {
              "type": "string",
              "id": 4
            },
            "level": {
              "type": "AccountLevel",
              "id": 5
            },
            "character": {
              "type": "Character",
              "id": 6
            },
            "level3": {
              "type": "AccountLevel",
              "id": 7
            },
            "avatar_frame": {
              "type": "uint32",
              "id": 8
            }
          }
        },
        "GameMode": {
          "fields": {
            "mode": {
              "type": "uint32",
              "id": 1
            },
            "ai": {
              "type": "bool",
              "id": 4
            },
            "extendinfo": {
              "type": "string",
              "id": 5
            },
            "detail_rule": {
              "type": "GameDetailRule",
              "id": 6
            },
            "testing_environment": {
              "type": "GameTestingEnvironmentSet",
              "id": 7
            }
          }
        },
        "GameTestingEnvironmentSet": {
          "fields": {
            "paixing": {
              "type": "uint32",
              "id": 1
            },
            "left_count": {
              "type": "uint32",
              "id": 2
            }
          }
        },
        "GameDetailRule": {
          "fields": {
            "time_fixed": {
              "type": "uint32",
              "id": 1
            },
            "time_add": {
              "type": "uint32",
              "id": 2
            },
            "dora_count": {
              "type": "uint32",
              "id": 3
            },
            "shiduan": {
              "type": "uint32",
              "id": 4
            },
            "init_point": {
              "type": "uint32",
              "id": 5
            },
            "fandian": {
              "type": "uint32",
              "id": 6
            },
            "can_jifei": {
              "type": "bool",
              "id": 7
            },
            "tianbian_value": {
              "type": "uint32",
              "id": 8
            },
            "liqibang_value": {
              "type": "uint32",
              "id": 9
            },
            "changbang_value": {
              "type": "uint32",
              "id": 10
            },
            "noting_fafu_1": {
              "type": "uint32",
              "id": 11
            },
            "noting_fafu_2": {
              "type": "uint32",
              "id": 12
            },
            "noting_fafu_3": {
              "type": "uint32",
              "id": 13
            },
            "have_liujumanguan": {
              "type": "bool",
              "id": 14
            },
            "have_qieshangmanguan": {
              "type": "bool",
              "id": 15
            },
            "have_biao_dora": {
              "type": "bool",
              "id": 16
            },
            "have_gang_biao_dora": {
              "type": "bool",
              "id": 17
            },
            "ming_dora_immediately_open": {
              "type": "bool",
              "id": 18
            },
            "have_li_dora": {
              "type": "bool",
              "id": 19
            },
            "have_gang_li_dora": {
              "type": "bool",
              "id": 20
            },
            "have_sifenglianda": {
              "type": "bool",
              "id": 21
            },
            "have_sigangsanle": {
              "type": "bool",
              "id": 22
            },
            "have_sijializhi": {
              "type": "bool",
              "id": 23
            },
            "have_jiuzhongjiupai": {
              "type": "bool",
              "id": 24
            },
            "have_sanjiahele": {
              "type": "bool",
              "id": 25
            },
            "have_toutiao": {
              "type": "bool",
              "id": 26
            },
            "have_helelianzhuang": {
              "type": "bool",
              "id": 27
            },
            "have_helezhongju": {
              "type": "bool",
              "id": 28
            },
            "have_tingpailianzhuang": {
              "type": "bool",
              "id": 29
            },
            "have_tingpaizhongju": {
              "type": "bool",
              "id": 30
            },
            "have_yifa": {
              "type": "bool",
              "id": 31
            },
            "have_nanruxiru": {
              "type": "bool",
              "id": 32
            },
            "jingsuanyuandian": {
              "type": "uint32",
              "id": 33
            },
            "shunweima_2": {
              "type": "int32",
              "id": 34
            },
            "shunweima_3": {
              "type": "int32",
              "id": 35
            },
            "shunweima_4": {
              "type": "int32",
              "id": 36
            },
            "bianjietishi": {
              "type": "bool",
              "id": 37
            },
            "ai_level": {
              "type": "uint32",
              "id": 38
            },
            "have_zimosun": {
              "type": "bool",
              "id": 39
            },
            "disable_multi_yukaman": {
              "type": "bool",
              "id": 40
            },
            "fanfu": {
              "type": "uint32",
              "id": 41
            },
            "guyi_mode": {
              "type": "uint32",
              "id": 42
            },
            "dora3_mode": {
              "type": "uint32",
              "id": 43
            }
          }
        },
        "Room": {
          "fields": {
            "room_id": {
              "type": "uint32",
              "id": 1
            },
            "owner_id": {
              "type": "uint32",
              "id": 2
            },
            "mode": {
              "type": "GameMode",
              "id": 3
            },
            "max_player_count": {
              "type": "uint32",
              "id": 4
            },
            "persons": {
              "rule": "repeated",
              "type": "PlayerGameView",
              "id": 5
            },
            "ready_list": {
              "rule": "repeated",
              "type": "uint32",
              "id": 6
            },
            "is_playing": {
              "type": "bool",
              "id": 7
            },
            "public_live": {
              "type": "bool",
              "id": 8
            },
            "robot_count": {
              "type": "uint32",
              "id": 9
            },
            "tournament_id": {
              "type": "uint32",
              "id": 10
            }
          }
        },
        "GameEndResult": {
          "fields": {
            "players": {
              "rule": "repeated",
              "type": "PlayerItem",
              "id": 1
            }
          },
          "nested": {
            "PlayerItem": {
              "fields": {
                "seat": {
                  "type": "uint32",
                  "id": 1
                },
                "total_point": {
                  "type": "int32",
                  "id": 2
                },
                "part_point_1": {
                  "type": "int32",
                  "id": 3
                },
                "part_point_2": {
                  "type": "int32",
                  "id": 4
                },
                "grading_score": {
                  "type": "int32",
                  "id": 5
                },
                "gold": {
                  "type": "int32",
                  "id": 6
                }
              }
            }
          }
        },
        "GameConnectInfo": {
          "fields": {
            "connect_token": {
              "type": "string",
              "id": 2
            },
            "game_uuid": {
              "type": "string",
              "id": 3
            },
            "location": {
              "type": "string",
              "id": 4
            }
          }
        },
        "ItemGainRecord": {
          "fields": {
            "item_id": {
              "type": "uint32",
              "id": 1
            },
            "count": {
              "type": "uint32",
              "id": 2
            }
          }
        },
        "ItemGainRecords": {
          "fields": {
            "record_time": {
              "type": "uint32",
              "id": 1
            },
            "limit_source_id": {
              "type": "uint32",
              "id": 2
            },
            "records": {
              "rule": "repeated",
              "type": "ItemGainRecord",
              "id": 3
            }
          }
        },
        "Item": {
          "fields": {
            "item_id": {
              "type": "uint32",
              "id": 1
            },
            "stack": {
              "type": "uint32",
              "id": 2
            }
          }
        },
        "Bag": {
          "fields": {
            "items": {
              "rule": "repeated",
              "type": "Item",
              "id": 1
            },
            "daily_gain_record": {
              "rule": "repeated",
              "type": "ItemGainRecords",
              "id": 2
            }
          }
        },
        "BagUpdate": {
          "fields": {
            "update_items": {
              "rule": "repeated",
              "type": "Item",
              "id": 1
            },
            "update_daily_gain_record": {
              "rule": "repeated",
              "type": "ItemGainRecords",
              "id": 2
            }
          }
        },
        "RewardSlot": {
          "fields": {
            "id": {
              "type": "uint32",
              "id": 1
            },
            "count": {
              "type": "uint32",
              "id": 2
            }
          }
        },
        "OpenResult": {
          "fields": {
            "reward": {
              "type": "RewardSlot",
              "id": 1
            },
            "replace": {
              "type": "RewardSlot",
              "id": 2
            }
          }
        },
        "RewardPlusResult": {
          "fields": {
            "id": {
              "type": "uint32",
              "id": 1
            },
            "count": {
              "type": "uint32",
              "id": 2
            },
            "exchange": {
              "type": "Exchange",
              "id": 3
            }
          },
          "nested": {
            "Exchange": {
              "fields": {
                "id": {
                  "type": "uint32",
                  "id": 1
                },
                "count": {
                  "type": "uint32",
                  "id": 2
                },
                "exchange": {
                  "type": "uint32",
                  "id": 3
                }
              }
            }
          }
        },
        "ExecuteReward": {
          "fields": {
            "reward": {
              "type": "RewardSlot",
              "id": 1
            },
            "replace": {
              "type": "RewardSlot",
              "id": 2
            },
            "replace_count": {
              "type": "uint32",
              "id": 3
            }
          }
        },
        "Mail": {
          "fields": {
            "mail_id": {
              "type": "uint32",
              "id": 1
            },
            "state": {
              "type": "uint32",
              "id": 2
            },
            "take_attachment": {
              "type": "bool",
              "id": 3
            },
            "title": {
              "type": "string",
              "id": 4
            },
            "content": {
              "type": "string",
              "id": 5
            },
            "attachments": {
              "rule": "repeated",
              "type": "RewardSlot",
              "id": 6
            },
            "create_time": {
              "type": "uint32",
              "id": 7
            },
            "expire_time": {
              "type": "uint32",
              "id": 8
            },
            "reference_id": {
              "type": "uint32",
              "id": 9
            }
          }
        },
        "AchievementProgress": {
          "fields": {
            "id": {
              "type": "uint32",
              "id": 1
            },
            "counter": {
              "type": "uint32",
              "id": 2
            },
            "achieved": {
              "type": "bool",
              "id": 3
            },
            "date": {
              "type": "uint32",
              "id": 4
            }
          }
        },
        "AccountStatisticByGameMode": {
          "fields": {
            "mode": {
              "type": "uint32",
              "id": 1
            },
            "game_count_sum": {
              "type": "uint32",
              "id": 2
            },
            "game_final_position": {
              "rule": "repeated",
              "type": "uint32",
              "id": 3
            },
            "fly_count": {
              "type": "uint32",
              "id": 4
            },
            "gold_earn_sum": {
              "type": "float",
              "id": 5
            },
            "round_count_sum": {
              "type": "uint32",
              "id": 6
            },
            "dadian_sum": {
              "type": "float",
              "id": 7
            },
            "round_end": {
              "rule": "repeated",
              "type": "RoundEndData",
              "id": 8
            },
            "ming_count_sum": {
              "type": "uint32",
              "id": 9
            },
            "liqi_count_sum": {
              "type": "uint32",
              "id": 10
            },
            "xun_count_sum": {
              "type": "uint32",
              "id": 11
            },
            "highest_lianzhuang": {
              "type": "uint32",
              "id": 12
            },
            "score_earn_sum": {
              "type": "uint32",
              "id": 13
            },
            "rank_score": {
              "rule": "repeated",
              "type": "RankScore",
              "id": 14
            }
          },
          "nested": {
            "RoundEndData": {
              "fields": {
                "type": {
                  "type": "uint32",
                  "id": 1
                },
                "sum": {
                  "type": "uint32",
                  "id": 2
                }
              }
            },
            "RankScore": {
              "fields": {
                "rank": {
                  "type": "uint32",
                  "id": 1
                },
                "score_sum": {
                  "type": "int32",
                  "id": 2
                },
                "count": {
                  "type": "uint32",
                  "id": 3
                }
              }
            }
          }
        },
        "AccountStatisticByFan": {
          "fields": {
            "fan_id": {
              "type": "uint32",
              "id": 1
            },
            "sum": {
              "type": "uint32",
              "id": 2
            }
          }
        },
        "AccountFanAchieved": {
          "fields": {
            "mahjong_category": {
              "type": "uint32",
              "id": 1
            },
            "fan": {
              "rule": "repeated",
              "type": "AccountStatisticByFan",
              "id": 2
            },
            "liujumanguan": {
              "type": "uint32",
              "id": 3
            }
          }
        },
        "AccountDetailStatistic": {
          "fields": {
            "game_mode": {
              "rule": "repeated",
              "type": "AccountStatisticByGameMode",
              "id": 1
            },
            "fan": {
              "rule": "repeated",
              "type": "AccountStatisticByFan",
              "id": 2
            },
            "liujumanguan": {
              "type": "uint32",
              "id": 3
            },
            "fan_achieved": {
              "rule": "repeated",
              "type": "AccountFanAchieved",
              "id": 4
            }
          }
        },
        "AccountDetailStatisticByCategory": {
          "fields": {
            "category": {
              "type": "uint32",
              "id": 1
            },
            "detail_statistic": {
              "type": "AccountDetailStatistic",
              "id": 2
            }
          }
        },
        "AccountDetailStatisticV2": {
          "fields": {
            "friend_room_statistic": {
              "type": "AccountDetailStatistic",
              "id": 1
            },
            "rank_statistic": {
              "type": "RankStatistic",
              "id": 2
            },
            "customized_contest_statistic": {
              "type": "CustomizedContestStatistic",
              "id": 3
            },
            "leisure_match_statistic": {
              "type": "AccountDetailStatistic",
              "id": 4
            }
          },
          "nested": {
            "RankStatistic": {
              "fields": {
                "total_statistic": {
                  "type": "RankData",
                  "id": 1
                },
                "month_statistic": {
                  "type": "RankData",
                  "id": 2
                },
                "month_refresh_time": {
                  "type": "uint32",
                  "id": 3
                }
              },
              "nested": {
                "RankData": {
                  "fields": {
                    "all_level_statistic": {
                      "type": "AccountDetailStatistic",
                      "id": 1
                    },
                    "level_data_list": {
                      "rule": "repeated",
                      "type": "RankLevelData",
                      "id": 2
                    }
                  },
                  "nested": {
                    "RankLevelData": {
                      "fields": {
                        "rank_level": {
                          "type": "uint32",
                          "id": 1
                        },
                        "statistic": {
                          "type": "AccountDetailStatistic",
                          "id": 2
                        }
                      }
                    }
                  }
                }
              }
            },
            "CustomizedContestStatistic": {
              "fields": {
                "total_statistic": {
                  "type": "AccountDetailStatistic",
                  "id": 1
                },
                "month_statistic": {
                  "type": "AccountDetailStatistic",
                  "id": 2
                },
                "month_refresh_time": {
                  "type": "uint32",
                  "id": 3
                }
              }
            }
          }
        },
        "AccountShiLian": {
          "fields": {
            "step": {
              "type": "uint32",
              "id": 1
            },
            "state": {
              "type": "uint32",
              "id": 2
            }
          }
        },
        "ClientDeviceInfo": {
          "fields": {
            "device_type": {
              "type": "string",
              "id": 1
            },
            "os": {
              "type": "string",
              "id": 2
            },
            "os_version": {
              "type": "string",
              "id": 3
            },
            "browser": {
              "type": "string",
              "id": 4
            }
          }
        },
        "GamePlayerState": {
          "values": {
            "NULL": 0,
            "AUTH": 1,
            "SYNCING": 2,
            "READY": 3
          }
        },
        "Announcement": {
          "fields": {
            "id": {
              "type": "uint32",
              "id": 1
            },
            "title": {
              "type": "string",
              "id": 2
            },
            "content": {
              "type": "string",
              "id": 3
            }
          }
        },
        "TaskProgress": {
          "fields": {
            "id": {
              "type": "uint32",
              "id": 1
            },
            "counter": {
              "type": "uint32",
              "id": 2
            },
            "achieved": {
              "type": "bool",
              "id": 3
            },
            "rewarded": {
              "type": "bool",
              "id": 4
            }
          }
        },
        "GameConfig": {
          "fields": {
            "category": {
              "type": "uint32",
              "id": 1
            },
            "mode": {
              "type": "GameMode",
              "id": 2
            },
            "meta": {
              "type": "GameMetaData",
              "id": 3
            }
          }
        },
        "AccountActiveState": {
          "fields": {
            "account_id": {
              "type": "uint32",
              "id": 1
            },
            "login_time": {
              "type": "uint32",
              "id": 2
            },
            "logout_time": {
              "type": "uint32",
              "id": 3
            },
            "is_online": {
              "type": "bool",
              "id": 4
            },
            "playing": {
              "type": "AccountPlayingGame",
              "id": 5
            }
          }
        },
        "Friend": {
          "fields": {
            "base": {
              "type": "PlayerBaseView",
              "id": 1
            },
            "state": {
              "type": "AccountActiveState",
              "id": 2
            }
          }
        },
        "GameLiveUnit": {
          "fields": {
            "timestamp": {
              "type": "uint32",
              "id": 1
            },
            "action_category": {
              "type": "uint32",
              "id": 2
            },
            "action_data": {
              "type": "bytes",
              "id": 3
            }
          }
        },
        "GameLiveSegment": {
          "fields": {
            "actions": {
              "rule": "repeated",
              "type": "GameLiveUnit",
              "id": 1
            }
          }
        },
        "GameLiveSegmentUri": {
          "fields": {
            "segment_id": {
              "type": "uint32",
              "id": 1
            },
            "segment_uri": {
              "type": "string",
              "id": 2
            }
          }
        },
        "GameLiveHead": {
          "fields": {
            "uuid": {
              "type": "string",
              "id": 1
            },
            "start_time": {
              "type": "uint32",
              "id": 2
            },
            "game_config": {
              "type": "GameConfig",
              "id": 3
            },
            "players": {
              "rule": "repeated",
              "type": "PlayerGameView",
              "id": 4
            },
            "seat_list": {
              "rule": "repeated",
              "type": "uint32",
              "id": 5
            }
          }
        },
        "GameNewRoundState": {
          "fields": {
            "seat_states": {
              "rule": "repeated",
              "type": "uint32",
              "id": 1
            }
          }
        },
        "GameEndAction": {
          "fields": {
            "state": {
              "type": "uint32",
              "id": 1
            }
          }
        },
        "GameNoopAction": {
          "fields": {}
        },
        "CommentItem": {
          "fields": {
            "comment_id": {
              "type": "uint32",
              "id": 1
            },
            "timestamp": {
              "type": "uint32",
              "id": 2
            },
            "commenter": {
              "type": "PlayerBaseView",
              "id": 3
            },
            "content": {
              "type": "string",
              "id": 4
            }
          }
        },
        "RollingNotice": {
          "fields": {
            "id": {
              "type": "uint32",
              "id": 1
            },
            "content": {
              "type": "string",
              "id": 2
            },
            "start_time": {
              "type": "uint32",
              "id": 3
            },
            "end_time": {
              "type": "uint32",
              "id": 4
            },
            "repeat_interval": {
              "type": "uint32",
              "id": 5
            }
          }
        },
        "BillingGoods": {
          "fields": {
            "id": {
              "type": "string",
              "id": 1
            },
            "name": {
              "type": "string",
              "id": 2
            },
            "desc": {
              "type": "string",
              "id": 3
            },
            "icon": {
              "type": "string",
              "id": 4
            },
            "resource_id": {
              "type": "uint32",
              "id": 5
            },
            "resource_count": {
              "type": "uint32",
              "id": 6
            }
          }
        },
        "BillShortcut": {
          "fields": {
            "id": {
              "type": "uint32",
              "id": 1
            },
            "count": {
              "type": "uint32",
              "id": 2
            },
            "dealPrice": {
              "type": "uint32",
              "id": 3
            }
          }
        },
        "BillingProduct": {
          "fields": {
            "goods": {
              "type": "BillingGoods",
              "id": 1
            },
            "currency_code": {
              "type": "string",
              "id": 2
            },
            "currency_price": {
              "type": "uint32",
              "id": 3
            },
            "sort_weight": {
              "type": "uint32",
              "id": 4
            }
          }
        },
        "Character": {
          "fields": {
            "charid": {
              "type": "uint32",
              "id": 1
            },
            "level": {
              "type": "uint32",
              "id": 2
            },
            "exp": {
              "type": "uint32",
              "id": 3
            },
            "views": {
              "rule": "repeated",
              "type": "ViewSlotSet",
              "id": 4
            },
            "skin": {
              "type": "uint32",
              "id": 5
            },
            "is_upgraded": {
              "type": "bool",
              "id": 6
            },
            "extra_emoji": {
              "rule": "repeated",
              "type": "uint32",
              "id": 7
            }
          },
          "nested": {
            "ViewSlotSet": {
              "fields": {
                "slot": {
                  "type": "uint32",
                  "id": 1
                },
                "item_id": {
                  "type": "uint32",
                  "id": 2
                }
              }
            }
          }
        },
        "BuyRecord": {
          "fields": {
            "id": {
              "type": "uint32",
              "id": 1
            },
            "count": {
              "type": "uint32",
              "id": 2
            }
          }
        },
        "ZHPShop": {
          "fields": {
            "goods": {
              "rule": "repeated",
              "type": "uint32",
              "id": 1
            },
            "buy_records": {
              "rule": "repeated",
              "type": "BuyRecord",
              "id": 2
            },
            "free_refresh": {
              "type": "RefreshCount",
              "id": 3
            },
            "cost_refresh": {
              "type": "RefreshCount",
              "id": 4
            }
          },
          "nested": {
            "RefreshCount": {
              "fields": {
                "count": {
                  "type": "uint32",
                  "id": 1
                },
                "limit": {
                  "type": "uint32",
                  "id": 2
                }
              }
            }
          }
        },
        "MonthTicketInfo": {
          "fields": {
            "id": {
              "type": "uint32",
              "id": 1
            },
            "end_time": {
              "type": "uint32",
              "id": 2
            },
            "last_pay_time": {
              "type": "uint32",
              "id": 3
            }
          }
        },
        "ShopInfo": {
          "fields": {
            "zhp": {
              "type": "ZHPShop",
              "id": 1
            },
            "buy_records": {
              "rule": "repeated",
              "type": "BuyRecord",
              "id": 2
            },
            "last_refresh_time": {
              "type": "uint32",
              "id": 3
            }
          }
        },
        "ChangeNicknameRecord": {
          "fields": {
            "from": {
              "type": "string",
              "id": 1
            },
            "to": {
              "type": "string",
              "id": 2
            },
            "time": {
              "type": "uint32",
              "id": 3
            }
          }
        },
        "ServerSettings": {
          "fields": {
            "payment_setting": {
              "type": "PaymentSetting",
              "id": 3
            }
          }
        },
        "PaymentSetting": {
          "fields": {
            "open_payment": {
              "type": "uint32",
              "id": 1
            },
            "payment_info_show_type": {
              "type": "uint32",
              "id": 2
            },
            "payment_info": {
              "type": "string",
              "id": 3
            },
            "wechat": {
              "type": "WechatData",
              "id": 4
            },
            "alipay": {
              "type": "AlipayData",
              "id": 5
            }
          },
          "nested": {
            "WechatData": {
              "fields": {
                "disable_create": {
                  "type": "bool",
                  "id": 1
                },
                "payment_source_platform": {
                  "type": "uint32",
                  "id": 2
                },
                "enable_credit": {
                  "type": "bool",
                  "id": 3
                }
              }
            },
            "AlipayData": {
              "fields": {
                "disable_create": {
                  "type": "bool",
                  "id": 1
                },
                "payment_source_platform": {
                  "type": "uint32",
                  "id": 2
                }
              }
            }
          }
        },
        "AccountSetting": {
          "fields": {
            "key": {
              "type": "uint32",
              "id": 1
            },
            "value": {
              "type": "uint32",
              "id": 2
            }
          }
        },
        "ChestData": {
          "fields": {
            "chest_id": {
              "type": "uint32",
              "id": 1
            },
            "total_open_count": {
              "type": "uint32",
              "id": 2
            },
            "consume_count": {
              "type": "uint32",
              "id": 3
            },
            "face_black_count": {
              "type": "uint32",
              "id": 4
            }
          }
        },
        "ChestDataV2": {
          "fields": {
            "chest_id": {
              "type": "uint32",
              "id": 1
            },
            "total_open_count": {
              "type": "uint32",
              "id": 2
            },
            "face_black_count": {
              "type": "uint32",
              "id": 3
            }
          }
        },
        "FaithData": {
          "fields": {
            "faith_id": {
              "type": "uint32",
              "id": 1
            },
            "total_open_count": {
              "type": "uint32",
              "id": 2
            },
            "consume_count": {
              "type": "uint32",
              "id": 3
            }
          }
        },
        "CustomizedContestBase": {
          "fields": {
            "unique_id": {
              "type": "uint32",
              "id": 1
            },
            "contest_id": {
              "type": "uint32",
              "id": 2
            },
            "contest_name": {
              "type": "string",
              "id": 3
            },
            "state": {
              "type": "uint32",
              "id": 4
            },
            "creator_id": {
              "type": "uint32",
              "id": 5
            },
            "create_time": {
              "type": "uint32",
              "id": 6
            },
            "start_time": {
              "type": "uint32",
              "id": 7
            },
            "finish_time": {
              "type": "uint32",
              "id": 8
            },
            "open": {
              "type": "bool",
              "id": 9
            }
          }
        },
        "CustomizedContestExtend": {
          "fields": {
            "unique_id": {
              "type": "uint32",
              "id": 1
            },
            "public_notice": {
              "type": "string",
              "id": 2
            }
          }
        },
        "CustomizedContestAbstract": {
          "fields": {
            "unique_id": {
              "type": "uint32",
              "id": 1
            },
            "contest_id": {
              "type": "uint32",
              "id": 2
            },
            "contest_name": {
              "type": "string",
              "id": 3
            },
            "state": {
              "type": "uint32",
              "id": 4
            },
            "creator_id": {
              "type": "uint32",
              "id": 5
            },
            "create_time": {
              "type": "uint32",
              "id": 6
            },
            "start_time": {
              "type": "uint32",
              "id": 7
            },
            "finish_time": {
              "type": "uint32",
              "id": 8
            },
            "open": {
              "type": "bool",
              "id": 9
            },
            "public_notice": {
              "type": "string",
              "id": 10
            }
          }
        },
        "CustomizedContestDetail": {
          "fields": {
            "unique_id": {
              "type": "uint32",
              "id": 1
            },
            "contest_id": {
              "type": "uint32",
              "id": 2
            },
            "contest_name": {
              "type": "string",
              "id": 3
            },
            "state": {
              "type": "uint32",
              "id": 4
            },
            "creator_id": {
              "type": "uint32",
              "id": 5
            },
            "create_time": {
              "type": "uint32",
              "id": 6
            },
            "start_time": {
              "type": "uint32",
              "id": 7
            },
            "finish_time": {
              "type": "uint32",
              "id": 8
            },
            "open": {
              "type": "bool",
              "id": 9
            },
            "rank_rule": {
              "type": "uint32",
              "id": 10
            },
            "game_mode": {
              "type": "GameMode",
              "id": 11
            },
            "private_notice": {
              "type": "string",
              "id": 12
            }
          }
        },
        "CustomizedContestPlayerReport": {
          "fields": {
            "rank_rule": {
              "type": "uint32",
              "id": 1
            },
            "rank": {
              "type": "uint32",
              "id": 2
            },
            "point": {
              "type": "int32",
              "id": 3
            },
            "recent_game_ranks": {
              "rule": "repeated",
              "type": "uint32",
              "id": 4
            },
            "total_game_count": {
              "type": "uint32",
              "id": 5
            }
          }
        },
        "RecordGame": {
          "fields": {
            "uuid": {
              "type": "string",
              "id": 1
            },
            "start_time": {
              "type": "uint32",
              "id": 2
            },
            "end_time": {
              "type": "uint32",
              "id": 3
            },
            "config": {
              "type": "GameConfig",
              "id": 5
            },
            "accounts": {
              "rule": "repeated",
              "type": "AccountInfo",
              "id": 11
            },
            "result": {
              "type": "GameEndResult",
              "id": 12
            }
          },
          "nested": {
            "AccountInfo": {
              "fields": {
                "account_id": {
                  "type": "uint32",
                  "id": 1
                },
                "seat": {
                  "type": "uint32",
                  "id": 2
                },
                "nickname": {
                  "type": "string",
                  "id": 3
                },
                "avatar_id": {
                  "type": "uint32",
                  "id": 4
                },
                "character": {
                  "type": "Character",
                  "id": 5
                },
                "title": {
                  "type": "uint32",
                  "id": 6
                },
                "level": {
                  "type": "AccountLevel",
                  "id": 7
                },
                "level3": {
                  "type": "AccountLevel",
                  "id": 8
                },
                "avatar_frame": {
                  "type": "uint32",
                  "id": 9
                }
              }
            }
          }
        },
        "CustomizedContestGameStart": {
          "fields": {
            "players": {
              "rule": "repeated",
              "type": "Item",
              "id": 1
            }
          },
          "nested": {
            "Item": {
              "fields": {
                "account_id": {
                  "type": "uint32",
                  "id": 1
                },
                "nickname": {
                  "type": "string",
                  "id": 2
                }
              }
            }
          }
        },
        "CustomizedContestGameEnd": {
          "fields": {
            "players": {
              "rule": "repeated",
              "type": "Item",
              "id": 1
            }
          },
          "nested": {
            "Item": {
              "fields": {
                "account_id": {
                  "type": "uint32",
                  "id": 1
                },
                "nickname": {
                  "type": "string",
                  "id": 2
                },
                "total_point": {
                  "type": "int32",
                  "id": 3
                }
              }
            }
          }
        },
        "Activity": {
          "fields": {
            "activity_id": {
              "type": "uint32",
              "id": 1
            },
            "start_time": {
              "type": "uint32",
              "id": 2
            },
            "end_time": {
              "type": "uint32",
              "id": 3
            },
            "type": {
              "type": "string",
              "id": 4
            }
          }
        },
        "ExchangeRecord": {
          "fields": {
            "exchange_id": {
              "type": "uint32",
              "id": 1
            },
            "count": {
              "type": "uint32",
              "id": 2
            }
          }
        },
        "ActivityAccumulatedPointData": {
          "fields": {
            "activity_id": {
              "type": "uint32",
              "id": 1
            },
            "point": {
              "type": "int32",
              "id": 2
            },
            "gained_reward_list": {
              "rule": "repeated",
              "type": "uint32",
              "id": 3
            }
          }
        },
        "ActivityRankPointData": {
          "fields": {
            "leaderboard_id": {
              "type": "uint32",
              "id": 1
            },
            "point": {
              "type": "int32",
              "id": 2
            },
            "gained_reward": {
              "type": "bool",
              "id": 3
            },
            "gainable_time": {
              "type": "uint32",
              "id": 4
            }
          }
        },
        "GameRoundHuData": {
          "fields": {
            "hupai": {
              "type": "HuPai",
              "id": 1
            },
            "fans": {
              "rule": "repeated",
              "type": "Fan",
              "id": 2
            },
            "score": {
              "type": "uint32",
              "id": 3
            },
            "xun": {
              "type": "uint32",
              "id": 4
            },
            "title_id": {
              "type": "uint32",
              "id": 5
            },
            "fan_sum": {
              "type": "uint32",
              "id": 6
            },
            "fu_sum": {
              "type": "uint32",
              "id": 7
            },
            "yakuman_count": {
              "type": "uint32",
              "id": 8
            },
            "biao_dora_count": {
              "type": "uint32",
              "id": 9
            },
            "red_dora_count": {
              "type": "uint32",
              "id": 10
            },
            "li_dora_count": {
              "type": "uint32",
              "id": 11
            },
            "babei_count": {
              "type": "uint32",
              "id": 12
            },
            "xuan_shang_count": {
              "type": "uint32",
              "id": 13
            }
          },
          "nested": {
            "HuPai": {
              "fields": {
                "tile": {
                  "type": "string",
                  "id": 1
                },
                "seat": {
                  "type": "uint32",
                  "id": 2
                },
                "liqi": {
                  "type": "uint32",
                  "id": 3
                }
              }
            },
            "Fan": {
              "fields": {
                "id": {
                  "type": "uint32",
                  "id": 1
                },
                "count": {
                  "type": "uint32",
                  "id": 2
                },
                "fan": {
                  "type": "uint32",
                  "id": 3
                }
              }
            }
          }
        },
        "GameRoundPlayerResult": {
          "fields": {
            "type": {
              "type": "uint32",
              "id": 1
            },
            "hands": {
              "rule": "repeated",
              "type": "string",
              "id": 2
            },
            "ming": {
              "rule": "repeated",
              "type": "string",
              "id": 3
            },
            "liqi_type": {
              "type": "uint32",
              "id": 4
            },
            "is_fulu": {
              "type": "bool",
              "id": 5
            },
            "is_liujumanguan": {
              "type": "bool",
              "id": 6
            },
            "lian_zhuang": {
              "type": "uint32",
              "id": 7
            },
            "hu": {
              "type": "GameRoundHuData",
              "id": 8
            }
          }
        },
        "GameRoundPlayer": {
          "fields": {
            "score": {
              "type": "int32",
              "id": 1
            },
            "rank": {
              "type": "uint32",
              "id": 2
            },
            "result": {
              "type": "GameRoundPlayerResult",
              "id": 3
            }
          }
        },
        "GameRoundSnapshot": {
          "fields": {
            "ju": {
              "type": "uint32",
              "id": 1
            },
            "ben": {
              "type": "uint32",
              "id": 2
            },
            "players": {
              "rule": "repeated",
              "type": "GameRoundPlayer",
              "id": 3
            }
          }
        },
        "GameFinalSnapshot": {
          "fields": {
            "uuid": {
              "type": "string",
              "id": 1
            },
            "state": {
              "type": "uint32",
              "id": 2
            },
            "category": {
              "type": "uint32",
              "id": 3
            },
            "mode": {
              "type": "GameMode",
              "id": 4
            },
            "meta": {
              "type": "GameMetaData",
              "id": 5
            },
            "calculate_param": {
              "type": "CalculateParam",
              "id": 6
            },
            "create_time": {
              "type": "uint32",
              "id": 7
            },
            "start_time": {
              "type": "uint32",
              "id": 8
            },
            "finish_time": {
              "type": "uint32",
              "id": 9
            },
            "seats": {
              "rule": "repeated",
              "type": "GameSeat",
              "id": 10
            },
            "rounds": {
              "rule": "repeated",
              "type": "GameRoundSnapshot",
              "id": 11
            },
            "account_views": {
              "rule": "repeated",
              "type": "PlayerGameView",
              "id": 12
            },
            "final_players": {
              "rule": "repeated",
              "type": "FinalPlayer",
              "id": 13
            }
          },
          "nested": {
            "CalculateParam": {
              "fields": {
                "init_point": {
                  "type": "uint32",
                  "id": 1
                },
                "jingsuanyuandian": {
                  "type": "uint32",
                  "id": 2
                },
                "rank_points": {
                  "rule": "repeated",
                  "type": "int32",
                  "id": 3
                }
              }
            },
            "GameSeat": {
              "fields": {
                "type": {
                  "type": "uint32",
                  "id": 1
                },
                "account_id": {
                  "type": "uint32",
                  "id": 2
                },
                "notify_endpoint": {
                  "type": "NetworkEndpoint",
                  "id": 3
                },
                "client_address": {
                  "type": "string",
                  "id": 4
                },
                "is_connected": {
                  "type": "bool",
                  "id": 5
                }
              }
            },
            "FinalPlayer": {
              "fields": {
                "seat": {
                  "type": "uint32",
                  "id": 1
                },
                "total_point": {
                  "type": "int32",
                  "id": 2
                },
                "part_point_1": {
                  "type": "int32",
                  "id": 3
                },
                "part_point_2": {
                  "type": "int32",
                  "id": 4
                },
                "grading_score": {
                  "type": "int32",
                  "id": 5
                },
                "gold": {
                  "type": "int32",
                  "id": 6
                }
              }
            }
          }
        },
        "RecordCollectedData": {
          "fields": {
            "uuid": {
              "type": "string",
              "id": 1
            },
            "remarks": {
              "type": "string",
              "id": 2
            },
            "start_time": {
              "type": "uint32",
              "id": 3
            },
            "end_time": {
              "type": "uint32",
              "id": 4
            }
          }
        },
        "Lobby": {
          "methods": {
            "fetchConnectionInfo": {
              "requestType": "ReqCommon",
              "responseType": "ResConnectionInfo"
            },
            "signup": {
              "requestType": "ReqSignupAccount",
              "responseType": "ResSignupAccount"
            },
            "login": {
              "requestType": "ReqLogin",
              "responseType": "ResLogin"
            },
            "emailLogin": {
              "requestType": "ReqEmailLogin",
              "responseType": "ResLogin"
            },
            "oauth2Auth": {
              "requestType": "ReqOauth2Auth",
              "responseType": "ResOauth2Auth"
            },
            "oauth2Check": {
              "requestType": "ReqOauth2Check",
              "responseType": "ResOauth2Check"
            },
            "oauth2Signup": {
              "requestType": "ReqOauth2Signup",
              "responseType": "ResOauth2Signup"
            },
            "oauth2Login": {
              "requestType": "ReqOauth2Login",
              "responseType": "ResLogin"
            },
            "createPhoneVerifyCode": {
              "requestType": "ReqCreatePhoneVerifyCode",
              "responseType": "ResCommon"
            },
            "createEmailVerifyCode": {
              "requestType": "ReqCreateEmailVerifyCode",
              "responseType": "ResCommon"
            },
            "verfifyCodeForSecure": {
              "requestType": "ReqVerifyCodeForSecure",
              "responseType": "ResVerfiyCodeForSecure"
            },
            "bindPhoneNumber": {
              "requestType": "ReqBindPhoneNumber",
              "responseType": "ResCommon"
            },
            "bindEmail": {
              "requestType": "ReqBindEmail",
              "responseType": "ResCommon"
            },
            "modifyPassword": {
              "requestType": "ReqModifyPassword",
              "responseType": "ResCommon"
            },
            "bindAccount": {
              "requestType": "ReqBindAccount",
              "responseType": "ResCommon"
            },
            "logout": {
              "requestType": "ReqLogout",
              "responseType": "ResLogout"
            },
            "heatbeat": {
              "requestType": "ReqHeatBeat",
              "responseType": "ResCommon"
            },
            "loginBeat": {
              "requestType": "ReqLoginBeat",
              "responseType": "ResCommon"
            },
            "createNickname": {
              "requestType": "ReqCreateNickname",
              "responseType": "ResCommon"
            },
            "modifyNickname": {
              "requestType": "ReqModifyNickname",
              "responseType": "ResCommon"
            },
            "modifyBirthday": {
              "requestType": "ReqModifyBirthday",
              "responseType": "ResCommon"
            },
            "fetchRoom": {
              "requestType": "ReqCommon",
              "responseType": "ResSelfRoom"
            },
            "createRoom": {
              "requestType": "ReqCreateRoom",
              "responseType": "ResCreateRoom"
            },
            "joinRoom": {
              "requestType": "ReqJoinRoom",
              "responseType": "ResJoinRoom"
            },
            "leaveRoom": {
              "requestType": "ReqCommon",
              "responseType": "ResCommon"
            },
            "readyPlay": {
              "requestType": "ReqRoomReady",
              "responseType": "ResCommon"
            },
            "startRoom": {
              "requestType": "ReqRoomStart",
              "responseType": "ResCommon"
            },
            "kickPlayer": {
              "requestType": "ReqRoomKick",
              "responseType": "ResCommon"
            },
            "modifyRoom": {
              "requestType": "ReqModifyRoom",
              "responseType": "ResCommon"
            },
            "matchGame": {
              "requestType": "ReqJoinMatchQueue",
              "responseType": "ResCommon"
            },
            "cancelMatch": {
              "requestType": "ReqCancelMatchQueue",
              "responseType": "ResCommon"
            },
            "fetchAccountInfo": {
              "requestType": "ReqAccountInfo",
              "responseType": "ResAccountInfo"
            },
            "changeAvatar": {
              "requestType": "ReqChangeAvatar",
              "responseType": "ResCommon"
            },
            "fetchAccountStatisticInfo": {
              "requestType": "ReqAccountStatisticInfo",
              "responseType": "ResAccountStatisticInfo"
            },
            "fetchAccountCharacterInfo": {
              "requestType": "ReqCommon",
              "responseType": "ResAccountCharacterInfo"
            },
            "shopPurchase": {
              "requestType": "ReqShopPurchase",
              "responseType": "ResShopPurchase"
            },
            "fetchGameRecord": {
              "requestType": "ReqGameRecord",
              "responseType": "ResGameRecord"
            },
            "fetchGameRecordList": {
              "requestType": "ReqGameRecordList",
              "responseType": "ResGameRecordList"
            },
            "fetchCollectedGameRecordList": {
              "requestType": "ReqCommon",
              "responseType": "ResCollectedGameRecordList"
            },
            "fetchGameRecordsDetail": {
              "requestType": "ReqGameRecordsDetail",
              "responseType": "ResGameRecordsDetail"
            },
            "addCollectedGameRecord": {
              "requestType": "ReqAddCollectedGameRecord",
              "responseType": "ResAddCollectedGameRecord"
            },
            "removeCollectedGameRecord": {
              "requestType": "ReqRemoveCollectedGameRecord",
              "responseType": "ResRemoveCollectedGameRecord"
            },
            "changeCollectedGameRecordRemarks": {
              "requestType": "ReqChangeCollectedGameRecordRemarks",
              "responseType": "ResChangeCollectedGameRecordRemarks"
            },
            "fetchLevelLeaderboard": {
              "requestType": "ReqLevelLeaderboard",
              "responseType": "ResLevelLeaderboard"
            },
            "fetchMultiAccountBrief": {
              "requestType": "ReqMultiAccountId",
              "responseType": "ResMultiAccountBrief"
            },
            "fetchFriendList": {
              "requestType": "ReqCommon",
              "responseType": "ResFriendList"
            },
            "fetchFriendApplyList": {
              "requestType": "ReqCommon",
              "responseType": "ResFriendApplyList"
            },
            "applyFriend": {
              "requestType": "ReqApplyFriend",
              "responseType": "ResCommon"
            },
            "handleFriendApply": {
              "requestType": "ReqHandleFriendApply",
              "responseType": "ResCommon"
            },
            "removeFriend": {
              "requestType": "ReqRemoveFriend",
              "responseType": "ResCommon"
            },
            "searchAccountById": {
              "requestType": "ReqSearchAccountById",
              "responseType": "ResSearchAccountById"
            },
            "searchAccountByPattern": {
              "requestType": "ReqSearchAccountByPattern",
              "responseType": "ResSearchAccountByPattern"
            },
            "fetchAccountState": {
              "requestType": "ReqAccountList",
              "responseType": "ResAccountStates"
            },
            "fetchBagInfo": {
              "requestType": "ReqCommon",
              "responseType": "ResBagInfo"
            },
            "useBagItem": {
              "requestType": "ReqUseBagItem",
              "responseType": "ResCommon"
            },
            "openManualItem": {
              "requestType": "ReqOpenManualItem",
              "responseType": "ResCommon"
            },
            "openRandomRewardItem": {
              "requestType": "ReqOpenRandomRewardItem",
              "responseType": "ResOpenRandomRewardItem"
            },
            "composeShard": {
              "requestType": "ReqComposeShard",
              "responseType": "ResCommon"
            },
            "fetchAnnouncement": {
              "requestType": "ReqCommon",
              "responseType": "ResAnnouncement"
            },
            "readAnnouncement": {
              "requestType": "ReqReadAnnouncement",
              "responseType": "ResCommon"
            },
            "fetchMailInfo": {
              "requestType": "ReqCommon",
              "responseType": "ResMailInfo"
            },
            "readMail": {
              "requestType": "ReqReadMail",
              "responseType": "ResCommon"
            },
            "deleteMail": {
              "requestType": "ReqDeleteMail",
              "responseType": "ResCommon"
            },
            "takeAttachmentFromMail": {
              "requestType": "ReqTakeAttachment",
              "responseType": "ResCommon"
            },
            "fetchAchievement": {
              "requestType": "ReqCommon",
              "responseType": "ResAchievement"
            },
            "buyShiLian": {
              "requestType": "ReqBuyShiLian",
              "responseType": "ResCommon"
            },
            "matchShiLian": {
              "requestType": "ReqCommon",
              "responseType": "ResCommon"
            },
            "goNextShiLian": {
              "requestType": "ReqCommon",
              "responseType": "ResCommon"
            },
            "updateClientValue": {
              "requestType": "ReqUpdateClientValue",
              "responseType": "ResCommon"
            },
            "fetchClientValue": {
              "requestType": "ReqCommon",
              "responseType": "ResClientValue"
            },
            "clientMessage": {
              "requestType": "ReqClientMessage",
              "responseType": "ResCommon"
            },
            "fetchCurrentMatchInfo": {
              "requestType": "ReqCurrentMatchInfo",
              "responseType": "ResCurrentMatchInfo"
            },
            "fetchReviveCoinInfo": {
              "requestType": "ReqCommon",
              "responseType": "ResReviveCoinInfo"
            },
            "gainReviveCoin": {
              "requestType": "ReqCommon",
              "responseType": "ResCommon"
            },
            "fetchDailyTask": {
              "requestType": "ReqCommon",
              "responseType": "ResDailyTask"
            },
            "refreshDailyTask": {
              "requestType": "ReqRefreshDailyTask",
              "responseType": "ResRefreshDailyTask"
            },
            "useGiftCode": {
              "requestType": "ReqUseGiftCode",
              "responseType": "ResUseGiftCode"
            },
            "fetchTitleList": {
              "requestType": "ReqCommon",
              "responseType": "ResTitleList"
            },
            "useTitle": {
              "requestType": "ReqUseTitle",
              "responseType": "ResCommon"
            },
            "sendClientMessage": {
              "requestType": "ReqSendClientMessage",
              "responseType": "ResCommon"
            },
            "fetchGameLiveInfo": {
              "requestType": "ReqGameLiveInfo",
              "responseType": "ResGameLiveInfo"
            },
            "fetchGameLiveLeftSegment": {
              "requestType": "ReqGameLiveLeftSegment",
              "responseType": "ResGameLiveLeftSegment"
            },
            "fetchGameLiveList": {
              "requestType": "ReqGameLiveList",
              "responseType": "ResGameLiveList"
            },
            "fetchCommentSetting": {
              "requestType": "ReqCommon",
              "responseType": "ResCommentSetting"
            },
            "updateCommentSetting": {
              "requestType": "ReqUpdateCommentSetting",
              "responseType": "ResCommon"
            },
            "fetchCommentList": {
              "requestType": "ReqFetchCommentList",
              "responseType": "ResFetchCommentList"
            },
            "fetchCommentContent": {
              "requestType": "ReqFetchCommentContent",
              "responseType": "ResFetchCommentContent"
            },
            "leaveComment": {
              "requestType": "ReqLeaveComment",
              "responseType": "ResCommon"
            },
            "deleteComment": {
              "requestType": "ReqDeleteComment",
              "responseType": "ResCommon"
            },
            "updateReadComment": {
              "requestType": "ReqUpdateReadComment",
              "responseType": "ResCommon"
            },
            "fetchRollingNotice": {
              "requestType": "ReqCommon",
              "responseType": "ReqRollingNotice"
            },
            "fetchServerTime": {
              "requestType": "ReqCommon",
              "responseType": "ResServerTime"
            },
            "fetchPlatformProducts": {
              "requestType": "ReqPlatformBillingProducts",
              "responseType": "ResPlatformBillingProducts"
            },
            "createBillingOrder": {
              "requestType": "ReqCreateBillingOrder",
              "responseType": "ResCreateBillingOrder"
            },
            "solveGooglePlayOrder": {
              "requestType": "ReqSolveGooglePlayOrder",
              "responseType": "ResCommon"
            },
            "cancelGooglePlayOrder": {
              "requestType": "ReqCancelGooglePlayOrder",
              "responseType": "ResCommon"
            },
            "openChest": {
              "requestType": "ReqOpenChest",
              "responseType": "ResOpenChest"
            },
            "buyFromChestShop": {
              "requestType": "ReqBuyFromChestShop",
              "responseType": "ResBuyFromChestShop"
            },
            "fetchDailySignInInfo": {
              "requestType": "ReqCommon",
              "responseType": "ResDailySignInInfo"
            },
            "doDailySignIn": {
              "requestType": "ReqCommon",
              "responseType": "ResCommon"
            },
            "doActivitySignIn": {
              "requestType": "ReqDoActivitySignIn",
              "responseType": "ResDoActivitySignIn"
            },
            "fetchCharacterInfo": {
              "requestType": "ReqCommon",
              "responseType": "ResCharacterInfo"
            },
            "changeMainCharacter": {
              "requestType": "ReqChangeMainCharacter",
              "responseType": "ResCommon"
            },
            "changeCharacterSkin": {
              "requestType": "ReqChangeCharacterSkin",
              "responseType": "ResCommon"
            },
            "changeCharacterView": {
              "requestType": "ReqChangeCharacterView",
              "responseType": "ResCommon"
            },
            "sendGiftToCharacter": {
              "requestType": "ReqSendGiftToCharacter",
              "responseType": "ResSendGiftToCharacter"
            },
            "sellItem": {
              "requestType": "ReqSellItem",
              "responseType": "ResCommon"
            },
            "fetchCommonView": {
              "requestType": "ReqCommon",
              "responseType": "ResCommonView"
            },
            "changeCommonView": {
              "requestType": "ReqChangeCommonView",
              "responseType": "ResCommon"
            },
            "upgradeCharacter": {
              "requestType": "ReqUpgradeCharacter",
              "responseType": "ResUpgradeCharacter"
            },
            "gameMasterCommand": {
              "requestType": "ReqGMCommand",
              "responseType": "ResCommon"
            },
            "fetchShopInfo": {
              "requestType": "ReqCommon",
              "responseType": "ResShopInfo"
            },
            "buyFromShop": {
              "requestType": "ReqBuyFromShop",
              "responseType": "ResBuyFromShop"
            },
            "buyFromZHP": {
              "requestType": "ReqBuyFromZHP",
              "responseType": "ResCommon"
            },
            "refreshZHPShop": {
              "requestType": "ReqCommon",
              "responseType": "ResRefreshZHPShop"
            },
            "fetchMonthTicketInfo": {
              "requestType": "ReqCommon",
              "responseType": "ResMonthTicketInfo"
            },
            "payMonthTicket": {
              "requestType": "ReqPayMonthTicket",
              "responseType": "ResPayMonthTicket"
            },
            "exchangeCurrency": {
              "requestType": "ReqExchangeCurrency",
              "responseType": "ResCommon"
            },
            "exchangeChestStone": {
              "requestType": "ReqExchangeCurrency",
              "responseType": "ResCommon"
            },
            "fetchServerSettings": {
              "requestType": "ReqCommon",
              "responseType": "ResServerSettings"
            },
            "fetchAccountSettings": {
              "requestType": "ReqCommon",
              "responseType": "ResAccountSettings"
            },
            "updateAccountSettings": {
              "requestType": "ReqUpdateAccountSettings",
              "responseType": "ResCommon"
            },
            "fetchModNicknameTime": {
              "requestType": "ReqCommon",
              "responseType": "ResModNicknameTime"
            },
            "createWechatNativeOrder": {
              "requestType": "ReqCreateWechatNativeOrder",
              "responseType": "ResCreateWechatNativeOrder"
            },
            "createWechatAppOrder": {
              "requestType": "ReqCreateWechatAppOrder",
              "responseType": "ResCreateWechatAppOrder"
            },
            "createAlipayOrder": {
              "requestType": "ReqCreateAlipayOrder",
              "responseType": "ResCreateAlipayOrder"
            },
            "createAlipayScanOrder": {
              "requestType": "ReqCreateAlipayScanOrder",
              "responseType": "ResCreateAlipayScanOrder"
            },
            "createAlipayAppOrder": {
              "requestType": "ReqCreateAlipayAppOrder",
              "responseType": "ResCreateAlipayAppOrder"
            },
            "createJPCreditCardOrder": {
              "requestType": "ReqCreateJPCreditCardOrder",
              "responseType": "ResCreateJPCreditCardOrder"
            },
            "createJPPaypalOrder": {
              "requestType": "ReqCreateJPPaypalOrder",
              "responseType": "ResCreateJPPaypalOrder"
            },
            "createJPAuOrder": {
              "requestType": "ReqCreateJPAuOrder",
              "responseType": "ResCreateJPAuOrder"
            },
            "createJPDocomoOrder": {
              "requestType": "ReqCreateJPDocomoOrder",
              "responseType": "ResCreateJPDocomoOrder"
            },
            "createJPWebMoneyOrder": {
              "requestType": "ReqCreateJPWebMoneyOrder",
              "responseType": "ResCreateJPWebMoneyOrder"
            },
            "createJPSoftbankOrder": {
              "requestType": "ReqCreateJPSoftbankOrder",
              "responseType": "ResCreateJPSoftbankOrder"
            },
            "createENPaypalOrder": {
              "requestType": "ReqCreateENPaypalOrder",
              "responseType": "ResCreateENPaypalOrder"
            },
            "createENMasterCardOrder": {
              "requestType": "ReqCreateENMasterCardOrder",
              "responseType": "ResCreateENMasterCardOrder"
            },
            "createENVisaOrder": {
              "requestType": "ReqCreateENVisaOrder",
              "responseType": "ResCreateENVisaOrder"
            },
            "createENJCBOrder": {
              "requestType": "ReqCreateENJCBOrder",
              "responseType": "ResCreateENJCBOrder"
            },
            "createENAlipayOrder": {
              "requestType": "ReqCreateENAlipayOrder",
              "responseType": "ResCreateENAlipayOrder"
            },
            "fetchMisc": {
              "requestType": "ReqCommon",
              "responseType": "ResMisc"
            },
            "modifySignature": {
              "requestType": "ReqModifySignature",
              "responseType": "ResCommon"
            },
            "fetchIDCardInfo": {
              "requestType": "ReqCommon",
              "responseType": "ResIDCardInfo"
            },
            "updateIDCardInfo": {
              "requestType": "ReqUpdateIDCardInfo",
              "responseType": "ResCommon"
            },
            "fetchVipReward": {
              "requestType": "ReqCommon",
              "responseType": "ResVipReward"
            },
            "gainVipReward": {
              "requestType": "ReqGainVipReward",
              "responseType": "ResCommon"
            },
            "fetchCustomizedContestList": {
              "requestType": "ReqFetchCustomizedContestList",
              "responseType": "ResFetchCustomizedContestList"
            },
            "fetchCustomizedContestExtendInfo": {
              "requestType": "ReqFetchCustomizedContestExtendInfo",
              "responseType": "ResFetchCustomizedContestExtendInfo"
            },
            "enterCustomizedContest": {
              "requestType": "ReqEnterCustomizedContest",
              "responseType": "ResEnterCustomizedContest"
            },
            "leaveCustomizedContest": {
              "requestType": "ReqCommon",
              "responseType": "ResCommon"
            },
            "fetchCustomizedContestOnlineInfo": {
              "requestType": "ReqFetchCustomizedContestOnlineInfo",
              "responseType": "ResFetchCustomizedContestOnlineInfo"
            },
            "fetchCustomizedContestByContestId": {
              "requestType": "ReqFetchCustomizedContestByContestId",
              "responseType": "ResFetchCustomizedContestByContestId"
            },
            "startCustomizedContest": {
              "requestType": "ReqStartCustomizedContest",
              "responseType": "ResCommon"
            },
            "stopCustomizedContest": {
              "requestType": "ReqCommon",
              "responseType": "ResCommon"
            },
            "joinCustomizedContestChatRoom": {
              "requestType": "ReqJoinCustomizedContestChatRoom",
              "responseType": "ResJoinCustomizedContestChatRoom"
            },
            "leaveCustomizedContestChatRoom": {
              "requestType": "ReqCommon",
              "responseType": "ResCommon"
            },
            "sayChatMessage": {
              "requestType": "ReqSayChatMessage",
              "responseType": "ResCommon"
            },
            "fetchCustomizedContestGameRecords": {
              "requestType": "ReqFetchCustomizedContestGameRecords",
              "responseType": "ResFetchCustomizedContestGameRecords"
            },
            "fetchCustomizedContestGameLiveList": {
              "requestType": "ReqFetchCustomizedContestGameLiveList",
              "responseType": "ResFetchCustomizedContestGameLiveList"
            },
            "followCustomizedContest": {
              "requestType": "ReqTargetCustomizedContest",
              "responseType": "ResCommon"
            },
            "unfollowCustomizedContest": {
              "requestType": "ReqTargetCustomizedContest",
              "responseType": "ResCommon"
            },
            "fetchActivityList": {
              "requestType": "ReqCommon",
              "responseType": "ResActivityList"
            },
            "fetchAccountActivityData": {
              "requestType": "ReqCommon",
              "responseType": "ResAccountActivityData"
            },
            "exchangeActivityItem": {
              "requestType": "ReqExchangeActivityItem",
              "responseType": "ResExchangeActivityItem"
            },
            "completeActivityTask": {
              "requestType": "ReqCompleteActivityTask",
              "responseType": "ResCommon"
            },
            "completeActivityFlipTask": {
              "requestType": "ReqCompleteActivityTask",
              "responseType": "ResCommon"
            },
            "recieveActivityFlipTask": {
              "requestType": "ReqRecieveActivityFlipTask",
              "responseType": "ResRecieveActivityFlipTask"
            },
            "fetchActivityFlipInfo": {
              "requestType": "ReqFetchActivityFlipInfo",
              "responseType": "ResFetchActivityFlipInfo"
            },
            "gainAccumulatedPointActivityReward": {
              "requestType": "ReqGainAccumulatedPointActivityReward",
              "responseType": "ResCommon"
            },
            "fetchRankPointLeaderboard": {
              "requestType": "ReqFetchRankPointLeaderboard",
              "responseType": "ResFetchRankPointLeaderboard"
            },
            "gainRankPointReward": {
              "requestType": "ReqGainRankPointReward",
              "responseType": "ResCommon"
            }
          }
        },
        "ResConnectionInfo": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "client_endpoint": {
              "type": "NetworkEndpoint",
              "id": 2
            }
          }
        },
        "ReqSignupAccount": {
          "fields": {
            "account": {
              "type": "string",
              "id": 1
            },
            "password": {
              "type": "string",
              "id": 2
            },
            "code": {
              "type": "string",
              "id": 3
            },
            "type": {
              "type": "uint32",
              "id": 4
            }
          }
        },
        "ResSignupAccount": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            }
          }
        },
        "ReqLogin": {
          "fields": {
            "account": {
              "type": "string",
              "id": 1
            },
            "password": {
              "type": "string",
              "id": 2
            },
            "reconnect": {
              "type": "bool",
              "id": 3
            },
            "device": {
              "type": "ClientDeviceInfo",
              "id": 4
            },
            "random_key": {
              "type": "string",
              "id": 5
            },
            "client_version": {
              "type": "string",
              "id": 6
            },
            "gen_access_token": {
              "type": "bool",
              "id": 7
            },
            "currency_platforms": {
              "rule": "repeated",
              "type": "uint32",
              "id": 8
            },
            "type": {
              "type": "uint32",
              "id": 9
            }
          }
        },
        "ResLogin": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "account_id": {
              "type": "uint32",
              "id": 2
            },
            "account": {
              "type": "Account",
              "id": 3
            },
            "game_info": {
              "type": "GameConnectInfo",
              "id": 4
            },
            "has_unread_announcement": {
              "type": "bool",
              "id": 5
            },
            "access_token": {
              "type": "string",
              "id": 6
            }
          }
        },
        "ReqEmailLogin": {
          "fields": {
            "email": {
              "type": "string",
              "id": 1
            },
            "password": {
              "type": "string",
              "id": 2
            },
            "reconnect": {
              "type": "bool",
              "id": 3
            },
            "device": {
              "type": "ClientDeviceInfo",
              "id": 4
            },
            "random_key": {
              "type": "string",
              "id": 5
            },
            "client_version": {
              "type": "string",
              "id": 6
            },
            "gen_access_token": {
              "type": "bool",
              "id": 7
            },
            "currency_platforms": {
              "rule": "repeated",
              "type": "uint32",
              "id": 8
            }
          }
        },
        "ReqBindAccount": {
          "fields": {
            "account": {
              "type": "string",
              "id": 1
            },
            "password": {
              "type": "string",
              "id": 2
            }
          }
        },
        "ReqCreatePhoneVerifyCode": {
          "fields": {
            "phone": {
              "type": "string",
              "id": 1
            },
            "usage": {
              "type": "uint32",
              "id": 2
            }
          }
        },
        "ReqCreateEmailVerifyCode": {
          "fields": {
            "email": {
              "type": "string",
              "id": 1
            },
            "usage": {
              "type": "uint32",
              "id": 2
            }
          }
        },
        "ReqVerifyCodeForSecure": {
          "fields": {
            "code": {
              "type": "string",
              "id": 1
            },
            "operation": {
              "type": "uint32",
              "id": 2
            }
          }
        },
        "ResVerfiyCodeForSecure": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "secure_token": {
              "type": "string",
              "id": 2
            }
          }
        },
        "ReqBindPhoneNumber": {
          "fields": {
            "code": {
              "type": "string",
              "id": 1
            },
            "phone": {
              "type": "string",
              "id": 2
            },
            "password": {
              "type": "string",
              "id": 3
            }
          }
        },
        "ReqBindEmail": {
          "fields": {
            "email": {
              "type": "string",
              "id": 1
            },
            "code": {
              "type": "string",
              "id": 2
            },
            "password": {
              "type": "string",
              "id": 3
            }
          }
        },
        "ReqModifyPassword": {
          "fields": {
            "new_password": {
              "type": "string",
              "id": 1
            },
            "old_password": {
              "type": "string",
              "id": 2
            },
            "secure_token": {
              "type": "string",
              "id": 3
            }
          }
        },
        "ReqOauth2Auth": {
          "fields": {
            "type": {
              "type": "uint32",
              "id": 1
            },
            "code": {
              "type": "string",
              "id": 2
            },
            "uid": {
              "type": "string",
              "id": 3
            }
          }
        },
        "ResOauth2Auth": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "access_token": {
              "type": "string",
              "id": 2
            }
          }
        },
        "ReqOauth2Check": {
          "fields": {
            "type": {
              "type": "uint32",
              "id": 1
            },
            "access_token": {
              "type": "string",
              "id": 2
            }
          }
        },
        "ResOauth2Check": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "has_account": {
              "type": "bool",
              "id": 2
            }
          }
        },
        "ReqOauth2Signup": {
          "fields": {
            "type": {
              "type": "uint32",
              "id": 1
            },
            "access_token": {
              "type": "string",
              "id": 2
            },
            "email": {
              "type": "string",
              "id": 3
            },
            "advertise_str": {
              "type": "string",
              "id": 4
            }
          }
        },
        "ResOauth2Signup": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            }
          }
        },
        "ReqOauth2Login": {
          "fields": {
            "type": {
              "type": "uint32",
              "id": 1
            },
            "access_token": {
              "type": "string",
              "id": 2
            },
            "reconnect": {
              "type": "bool",
              "id": 3
            },
            "device": {
              "type": "ClientDeviceInfo",
              "id": 4
            },
            "random_key": {
              "type": "string",
              "id": 5
            },
            "client_version": {
              "type": "string",
              "id": 6
            },
            "currency_platforms": {
              "rule": "repeated",
              "type": "uint32",
              "id": 8
            }
          }
        },
        "ReqLogout": {
          "fields": {}
        },
        "ResLogout": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            }
          }
        },
        "ReqHeatBeat": {
          "fields": {
            "no_operation_counter": {
              "type": "uint32",
              "id": 1
            }
          }
        },
        "ReqLoginBeat": {
          "fields": {
            "contract": {
              "type": "string",
              "id": 1
            }
          }
        },
        "ReqJoinMatchQueue": {
          "fields": {
            "match_mode": {
              "type": "uint32",
              "id": 1
            }
          }
        },
        "ReqCancelMatchQueue": {
          "fields": {
            "match_mode": {
              "type": "uint32",
              "id": 1
            }
          }
        },
        "ReqAccountInfo": {
          "fields": {
            "account_id": {
              "type": "uint32",
              "id": 1
            }
          }
        },
        "ResAccountInfo": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "account": {
              "type": "Account",
              "id": 2
            },
            "room": {
              "type": "Room",
              "id": 3
            }
          }
        },
        "ReqCreateNickname": {
          "fields": {
            "nickname": {
              "type": "string",
              "id": 1
            },
            "advertise_str": {
              "type": "string",
              "id": 2
            }
          }
        },
        "ReqModifyNickname": {
          "fields": {
            "nickname": {
              "type": "string",
              "id": 1
            },
            "use_item_id": {
              "type": "uint32",
              "id": 2
            }
          }
        },
        "ReqModifyBirthday": {
          "fields": {
            "birthday": {
              "type": "int32",
              "id": 1
            }
          }
        },
        "ResSelfRoom": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "room": {
              "type": "Room",
              "id": 2
            }
          }
        },
        "ReqCreateRoom": {
          "fields": {
            "player_count": {
              "type": "uint32",
              "id": 1
            },
            "mode": {
              "type": "GameMode",
              "id": 2
            },
            "public_live": {
              "type": "bool",
              "id": 3
            }
          }
        },
        "ResCreateRoom": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "room": {
              "type": "Room",
              "id": 2
            }
          }
        },
        "ReqJoinRoom": {
          "fields": {
            "room_id": {
              "type": "uint32",
              "id": 1
            }
          }
        },
        "ResJoinRoom": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "room": {
              "type": "Room",
              "id": 2
            }
          }
        },
        "ReqRoomReady": {
          "fields": {
            "ready": {
              "type": "bool",
              "id": 1
            }
          }
        },
        "ReqRoomStart": {
          "fields": {}
        },
        "ReqRoomKick": {
          "fields": {
            "account_id": {
              "type": "uint32",
              "id": 1
            }
          }
        },
        "ReqModifyRoom": {
          "fields": {
            "robot_count": {
              "type": "uint32",
              "id": 1
            }
          }
        },
        "ReqChangeAvatar": {
          "fields": {
            "avatar_id": {
              "type": "uint32",
              "id": 1
            }
          }
        },
        "ReqAccountStatisticInfo": {
          "fields": {
            "account_id": {
              "type": "uint32",
              "id": 1
            }
          }
        },
        "ResAccountStatisticInfo": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "statistic_data": {
              "rule": "repeated",
              "type": "AccountStatisticData",
              "id": 2
            },
            "detail_data": {
              "type": "AccountDetailStatisticV2",
              "id": 3
            }
          }
        },
        "ResAccountCharacterInfo": {
          "fields": {
            "unlock_list": {
              "rule": "repeated",
              "type": "uint32",
              "id": 1
            }
          }
        },
        "ReqShopPurchase": {
          "fields": {
            "type": {
              "type": "string",
              "id": 1
            },
            "id": {
              "type": "uint32",
              "id": 2
            }
          }
        },
        "ResShopPurchase": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "update": {
              "type": "AccountUpdate",
              "id": 2
            }
          }
        },
        "ReqGameRecord": {
          "fields": {
            "game_uuid": {
              "type": "string",
              "id": 1
            }
          }
        },
        "ResGameRecord": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "head": {
              "type": "RecordGame",
              "id": 3
            },
            "data": {
              "type": "bytes",
              "id": 4
            },
            "data_url": {
              "type": "string",
              "id": 5
            }
          }
        },
        "ReqGameRecordList": {
          "fields": {
            "start": {
              "type": "uint32",
              "id": 1
            },
            "count": {
              "type": "uint32",
              "id": 2
            },
            "type": {
              "type": "uint32",
              "id": 3
            }
          }
        },
        "ResGameRecordList": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "total_count": {
              "type": "uint32",
              "id": 2
            },
            "record_list": {
              "rule": "repeated",
              "type": "RecordGame",
              "id": 3
            }
          }
        },
        "ResCollectedGameRecordList": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "record_list": {
              "rule": "repeated",
              "type": "RecordCollectedData",
              "id": 2
            },
            "record_collect_limit": {
              "type": "uint32",
              "id": 3
            }
          }
        },
        "ReqGameRecordsDetail": {
          "fields": {
            "uuid_list": {
              "rule": "repeated",
              "type": "string",
              "id": 1
            }
          }
        },
        "ResGameRecordsDetail": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "record_list": {
              "rule": "repeated",
              "type": "RecordGame",
              "id": 2
            }
          }
        },
        "ReqAddCollectedGameRecord": {
          "fields": {
            "uuid": {
              "type": "string",
              "id": 1
            },
            "remarks": {
              "type": "string",
              "id": 2
            },
            "start_time": {
              "type": "uint32",
              "id": 3
            },
            "end_time": {
              "type": "uint32",
              "id": 4
            }
          }
        },
        "ResAddCollectedGameRecord": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            }
          }
        },
        "ReqRemoveCollectedGameRecord": {
          "fields": {
            "uuid": {
              "type": "string",
              "id": 1
            }
          }
        },
        "ResRemoveCollectedGameRecord": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            }
          }
        },
        "ReqChangeCollectedGameRecordRemarks": {
          "fields": {
            "uuid": {
              "type": "string",
              "id": 1
            },
            "remarks": {
              "type": "string",
              "id": 2
            }
          }
        },
        "ResChangeCollectedGameRecordRemarks": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            }
          }
        },
        "ReqLevelLeaderboard": {
          "fields": {
            "type": {
              "type": "uint32",
              "id": 1
            }
          }
        },
        "ResLevelLeaderboard": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "items": {
              "rule": "repeated",
              "type": "Item",
              "id": 2
            },
            "self_rank": {
              "type": "uint32",
              "id": 3
            }
          },
          "nested": {
            "Item": {
              "fields": {
                "account_id": {
                  "type": "uint32",
                  "id": 1
                },
                "level": {
                  "type": "AccountLevel",
                  "id": 2
                }
              }
            }
          }
        },
        "ReqMultiAccountId": {
          "fields": {
            "account_id_list": {
              "rule": "repeated",
              "type": "uint32",
              "id": 1
            }
          }
        },
        "ResMultiAccountBrief": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "players": {
              "rule": "repeated",
              "type": "PlayerBaseView",
              "id": 2
            }
          }
        },
        "ResFriendList": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "friends": {
              "rule": "repeated",
              "type": "Friend",
              "id": 2
            },
            "friend_max_count": {
              "type": "uint32",
              "id": 3
            }
          }
        },
        "ResFriendApplyList": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "applies": {
              "rule": "repeated",
              "type": "FriendApply",
              "id": 2
            }
          },
          "nested": {
            "FriendApply": {
              "fields": {
                "account_id": {
                  "type": "uint32",
                  "id": 1
                },
                "apply_time": {
                  "type": "uint32",
                  "id": 2
                }
              }
            }
          }
        },
        "ReqApplyFriend": {
          "fields": {
            "target_id": {
              "type": "uint32",
              "id": 1
            }
          }
        },
        "ReqHandleFriendApply": {
          "fields": {
            "target_id": {
              "type": "uint32",
              "id": 1
            },
            "method": {
              "type": "uint32",
              "id": 2
            }
          }
        },
        "ReqRemoveFriend": {
          "fields": {
            "target_id": {
              "type": "uint32",
              "id": 1
            }
          }
        },
        "ReqSearchAccountByPattern": {
          "fields": {
            "search_next": {
              "type": "bool",
              "id": 1
            },
            "pattern": {
              "type": "string",
              "id": 2
            }
          }
        },
        "ResSearchAccountByPattern": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "is_finished": {
              "type": "bool",
              "id": 2
            },
            "match_accounts": {
              "rule": "repeated",
              "type": "uint32",
              "id": 3
            },
            "decode_id": {
              "type": "uint32",
              "id": 4
            }
          }
        },
        "ReqAccountList": {
          "fields": {
            "account_id_list": {
              "rule": "repeated",
              "type": "uint32",
              "id": 1
            }
          }
        },
        "ResAccountStates": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "states": {
              "rule": "repeated",
              "type": "AccountActiveState",
              "id": 2
            }
          }
        },
        "ReqSearchAccountById": {
          "fields": {
            "account_id": {
              "type": "uint32",
              "id": 1
            }
          }
        },
        "ResSearchAccountById": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "player": {
              "type": "PlayerBaseView",
              "id": 2
            }
          }
        },
        "ResBagInfo": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "bag": {
              "type": "Bag",
              "id": 2
            }
          }
        },
        "ReqUseBagItem": {
          "fields": {
            "item_id": {
              "type": "uint32",
              "id": 1
            }
          }
        },
        "ReqOpenManualItem": {
          "fields": {
            "item_id": {
              "type": "uint32",
              "id": 1
            },
            "count": {
              "type": "uint32",
              "id": 2
            },
            "select_id": {
              "type": "uint32",
              "id": 3
            }
          }
        },
        "ReqOpenRandomRewardItem": {
          "fields": {
            "item_id": {
              "type": "uint32",
              "id": 1
            }
          }
        },
        "ResOpenRandomRewardItem": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "results": {
              "rule": "repeated",
              "type": "OpenResult",
              "id": 2
            }
          }
        },
        "ReqComposeShard": {
          "fields": {
            "item_id": {
              "type": "uint32",
              "id": 1
            }
          }
        },
        "ResAnnouncement": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "announcements": {
              "rule": "repeated",
              "type": "Announcement",
              "id": 2
            },
            "sort": {
              "rule": "repeated",
              "type": "uint32",
              "id": 3
            },
            "read_list": {
              "rule": "repeated",
              "type": "uint32",
              "id": 4
            }
          }
        },
        "ResMailInfo": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "mails": {
              "rule": "repeated",
              "type": "Mail",
              "id": 2
            }
          }
        },
        "ReqReadMail": {
          "fields": {
            "mail_id": {
              "type": "uint32",
              "id": 1
            }
          }
        },
        "ReqDeleteMail": {
          "fields": {
            "mail_id": {
              "type": "uint32",
              "id": 1
            }
          }
        },
        "ReqTakeAttachment": {
          "fields": {
            "mail_id": {
              "type": "uint32",
              "id": 1
            }
          }
        },
        "ResAchievement": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "progresses": {
              "rule": "repeated",
              "type": "AchievementProgress",
              "id": 2
            }
          }
        },
        "ResTitleList": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "title_list": {
              "rule": "repeated",
              "type": "uint32",
              "id": 2
            }
          }
        },
        "ReqUseTitle": {
          "fields": {
            "title": {
              "type": "uint32",
              "id": 1
            }
          }
        },
        "ReqBuyShiLian": {
          "fields": {
            "type": {
              "type": "uint32",
              "id": 1
            }
          }
        },
        "ReqUpdateClientValue": {
          "fields": {
            "key": {
              "type": "uint32",
              "id": 1
            },
            "value": {
              "type": "uint32",
              "id": 2
            }
          }
        },
        "ResClientValue": {
          "fields": {
            "datas": {
              "rule": "repeated",
              "type": "Value",
              "id": 1
            },
            "recharged_count": {
              "type": "uint32",
              "id": 2
            }
          },
          "nested": {
            "Value": {
              "fields": {
                "key": {
                  "type": "uint32",
                  "id": 1
                },
                "value": {
                  "type": "uint32",
                  "id": 2
                }
              }
            }
          }
        },
        "ReqClientMessage": {
          "fields": {
            "timestamp": {
              "type": "uint32",
              "id": 1
            },
            "message": {
              "type": "string",
              "id": 2
            }
          }
        },
        "ReqCurrentMatchInfo": {
          "fields": {
            "mode_list": {
              "rule": "repeated",
              "type": "uint32",
              "id": 1
            }
          }
        },
        "ResCurrentMatchInfo": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "matches": {
              "rule": "repeated",
              "type": "CurrentMatchInfo",
              "id": 2
            }
          },
          "nested": {
            "CurrentMatchInfo": {
              "fields": {
                "mode_id": {
                  "type": "uint32",
                  "id": 1
                },
                "playing_count": {
                  "type": "uint32",
                  "id": 2
                }
              }
            }
          }
        },
        "ReqReadAnnouncement": {
          "fields": {
            "announcement_id": {
              "type": "uint32",
              "id": 1
            }
          }
        },
        "ResReviveCoinInfo": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "has_gained": {
              "type": "bool",
              "id": 2
            }
          }
        },
        "ResDailyTask": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "progresses": {
              "rule": "repeated",
              "type": "TaskProgress",
              "id": 2
            },
            "has_refresh_count": {
              "type": "bool",
              "id": 3
            },
            "max_daily_task_count": {
              "type": "uint32",
              "id": 4
            },
            "refresh_count": {
              "type": "uint32",
              "id": 5
            }
          }
        },
        "ReqRefreshDailyTask": {
          "fields": {
            "task_id": {
              "type": "uint32",
              "id": 1
            }
          }
        },
        "ResRefreshDailyTask": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "progress": {
              "type": "TaskProgress",
              "id": 2
            },
            "refresh_count": {
              "type": "uint32",
              "id": 3
            }
          }
        },
        "ReqUseGiftCode": {
          "fields": {
            "code": {
              "type": "string",
              "id": 1
            }
          }
        },
        "ResUseGiftCode": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "rewards": {
              "rule": "repeated",
              "type": "RewardSlot",
              "id": 6
            }
          }
        },
        "ReqSendClientMessage": {
          "fields": {
            "target_id": {
              "type": "uint32",
              "id": 1
            },
            "type": {
              "type": "uint32",
              "id": 2
            },
            "content": {
              "type": "string",
              "id": 3
            }
          }
        },
        "ReqGameLiveInfo": {
          "fields": {
            "game_uuid": {
              "type": "string",
              "id": 1
            }
          }
        },
        "ResGameLiveInfo": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "left_start_seconds": {
              "type": "uint32",
              "id": 2
            },
            "live_head": {
              "type": "GameLiveHead",
              "id": 3
            },
            "segments": {
              "rule": "repeated",
              "type": "GameLiveSegmentUri",
              "id": 4
            },
            "now_millisecond": {
              "type": "uint32",
              "id": 5
            }
          }
        },
        "ReqGameLiveLeftSegment": {
          "fields": {
            "game_uuid": {
              "type": "string",
              "id": 1
            },
            "last_segment_id": {
              "type": "uint32",
              "id": 2
            }
          }
        },
        "ResGameLiveLeftSegment": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "live_state": {
              "type": "uint32",
              "id": 2
            },
            "segments": {
              "rule": "repeated",
              "type": "GameLiveSegmentUri",
              "id": 4
            },
            "now_millisecond": {
              "type": "uint32",
              "id": 5
            },
            "segment_end_millisecond": {
              "type": "uint32",
              "id": 6
            }
          }
        },
        "ReqGameLiveList": {
          "fields": {
            "filter_id": {
              "type": "uint32",
              "id": 1
            }
          }
        },
        "ResGameLiveList": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "live_list": {
              "rule": "repeated",
              "type": "GameLiveHead",
              "id": 2
            }
          }
        },
        "ResCommentSetting": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "comment_allow": {
              "type": "uint32",
              "id": 2
            }
          }
        },
        "ReqUpdateCommentSetting": {
          "fields": {
            "comment_allow": {
              "type": "uint32",
              "id": 1
            }
          }
        },
        "ReqFetchCommentList": {
          "fields": {
            "target_id": {
              "type": "uint32",
              "id": 1
            }
          }
        },
        "ResFetchCommentList": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "comment_allow": {
              "type": "uint32",
              "id": 2
            },
            "comment_id_list": {
              "rule": "repeated",
              "type": "uint32",
              "id": 3
            },
            "last_read_id": {
              "type": "uint32",
              "id": 4
            }
          }
        },
        "ReqFetchCommentContent": {
          "fields": {
            "target_id": {
              "type": "uint32",
              "id": 1
            },
            "comment_id_list": {
              "rule": "repeated",
              "type": "uint32",
              "id": 2
            }
          }
        },
        "ResFetchCommentContent": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "comments": {
              "rule": "repeated",
              "type": "CommentItem",
              "id": 2
            }
          }
        },
        "ReqLeaveComment": {
          "fields": {
            "target_id": {
              "type": "uint32",
              "id": 1
            },
            "content": {
              "type": "string",
              "id": 2
            }
          }
        },
        "ReqDeleteComment": {
          "fields": {
            "target_id": {
              "type": "uint32",
              "id": 1
            },
            "delete_list": {
              "rule": "repeated",
              "type": "uint32",
              "id": 2
            }
          }
        },
        "ReqUpdateReadComment": {
          "fields": {
            "read_id": {
              "type": "uint32",
              "id": 1
            }
          }
        },
        "ReqRollingNotice": {
          "fields": {
            "notice": {
              "type": "RollingNotice",
              "id": 1
            }
          }
        },
        "ResServerTime": {
          "fields": {
            "server_time": {
              "type": "uint32",
              "id": 1
            }
          }
        },
        "ReqPlatformBillingProducts": {
          "fields": {
            "shelves_id": {
              "type": "uint32",
              "id": 1
            }
          }
        },
        "ResPlatformBillingProducts": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "products": {
              "rule": "repeated",
              "type": "BillingProduct",
              "id": 2
            }
          }
        },
        "ReqCreateBillingOrder": {
          "fields": {
            "goods_id": {
              "type": "uint32",
              "id": 1
            },
            "payment_platform": {
              "type": "uint32",
              "id": 2
            },
            "client_type": {
              "type": "uint32",
              "id": 3
            },
            "account_id": {
              "type": "uint32",
              "id": 4
            }
          }
        },
        "ResCreateBillingOrder": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "order_id": {
              "type": "string",
              "id": 2
            }
          }
        },
        "ReqSolveGooglePlayOrder": {
          "fields": {
            "inapp_purchase_data": {
              "type": "string",
              "id": 2
            },
            "inapp_data_signature": {
              "type": "string",
              "id": 3
            }
          }
        },
        "ReqCancelGooglePlayOrder": {
          "fields": {
            "order_id": {
              "type": "string",
              "id": 1
            }
          }
        },
        "ReqCreateWechatNativeOrder": {
          "fields": {
            "goods_id": {
              "type": "uint32",
              "id": 1
            },
            "client_type": {
              "type": "uint32",
              "id": 2
            },
            "account_id": {
              "type": "uint32",
              "id": 3
            },
            "account_ip": {
              "type": "string",
              "id": 4
            }
          }
        },
        "ResCreateWechatNativeOrder": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "qrcode_buffer": {
              "type": "string",
              "id": 2
            },
            "order_id": {
              "type": "string",
              "id": 3
            }
          }
        },
        "ReqCreateWechatAppOrder": {
          "fields": {
            "goods_id": {
              "type": "uint32",
              "id": 1
            },
            "client_type": {
              "type": "uint32",
              "id": 2
            },
            "account_id": {
              "type": "uint32",
              "id": 3
            },
            "account_ip": {
              "type": "string",
              "id": 4
            }
          }
        },
        "ResCreateWechatAppOrder": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "call_wechat_app_param": {
              "type": "CallWechatAppParam",
              "id": 2
            }
          },
          "nested": {
            "CallWechatAppParam": {
              "fields": {
                "appid": {
                  "type": "string",
                  "id": 1
                },
                "partnerid": {
                  "type": "string",
                  "id": 2
                },
                "prepayid": {
                  "type": "string",
                  "id": 3
                },
                "package": {
                  "type": "string",
                  "id": 4
                },
                "noncestr": {
                  "type": "string",
                  "id": 5
                },
                "timestamp": {
                  "type": "string",
                  "id": 6
                },
                "sign": {
                  "type": "string",
                  "id": 7
                }
              }
            }
          }
        },
        "ReqCreateAlipayOrder": {
          "fields": {
            "goods_id": {
              "type": "uint32",
              "id": 1
            },
            "client_type": {
              "type": "uint32",
              "id": 2
            },
            "account_id": {
              "type": "uint32",
              "id": 3
            },
            "alipay_trade_type": {
              "type": "string",
              "id": 4
            },
            "return_url": {
              "type": "string",
              "id": 5
            }
          }
        },
        "ResCreateAlipayOrder": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "alipay_url": {
              "type": "string",
              "id": 2
            }
          }
        },
        "ReqCreateAlipayScanOrder": {
          "fields": {
            "goods_id": {
              "type": "uint32",
              "id": 1
            },
            "client_type": {
              "type": "uint32",
              "id": 2
            },
            "account_id": {
              "type": "uint32",
              "id": 3
            }
          }
        },
        "ResCreateAlipayScanOrder": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "qrcode_buffer": {
              "type": "string",
              "id": 2
            },
            "order_id": {
              "type": "string",
              "id": 3
            },
            "qr_code": {
              "type": "string",
              "id": 4
            }
          }
        },
        "ReqCreateAlipayAppOrder": {
          "fields": {
            "goods_id": {
              "type": "uint32",
              "id": 1
            },
            "client_type": {
              "type": "uint32",
              "id": 2
            },
            "account_id": {
              "type": "uint32",
              "id": 3
            }
          }
        },
        "ResCreateAlipayAppOrder": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "alipay_url": {
              "type": "string",
              "id": 2
            }
          }
        },
        "ReqCreateJPCreditCardOrder": {
          "fields": {
            "goods_id": {
              "type": "uint32",
              "id": 1
            },
            "client_type": {
              "type": "uint32",
              "id": 2
            },
            "account_id": {
              "type": "uint32",
              "id": 3
            },
            "return_url": {
              "type": "string",
              "id": 4
            },
            "access_token": {
              "type": "string",
              "id": 5
            }
          }
        },
        "ResCreateJPCreditCardOrder": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "order_id": {
              "type": "string",
              "id": 2
            }
          }
        },
        "ReqCreateJPPaypalOrder": {
          "fields": {
            "goods_id": {
              "type": "uint32",
              "id": 1
            },
            "client_type": {
              "type": "uint32",
              "id": 2
            },
            "account_id": {
              "type": "uint32",
              "id": 3
            },
            "return_url": {
              "type": "string",
              "id": 4
            },
            "access_token": {
              "type": "string",
              "id": 5
            }
          }
        },
        "ResCreateJPPaypalOrder": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "order_id": {
              "type": "string",
              "id": 2
            }
          }
        },
        "ReqCreateJPAuOrder": {
          "fields": {
            "goods_id": {
              "type": "uint32",
              "id": 1
            },
            "client_type": {
              "type": "uint32",
              "id": 2
            },
            "account_id": {
              "type": "uint32",
              "id": 3
            },
            "return_url": {
              "type": "string",
              "id": 4
            },
            "access_token": {
              "type": "string",
              "id": 5
            }
          }
        },
        "ResCreateJPAuOrder": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "order_id": {
              "type": "string",
              "id": 2
            }
          }
        },
        "ReqCreateJPDocomoOrder": {
          "fields": {
            "goods_id": {
              "type": "uint32",
              "id": 1
            },
            "client_type": {
              "type": "uint32",
              "id": 2
            },
            "account_id": {
              "type": "uint32",
              "id": 3
            },
            "return_url": {
              "type": "string",
              "id": 4
            },
            "access_token": {
              "type": "string",
              "id": 5
            }
          }
        },
        "ResCreateJPDocomoOrder": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "order_id": {
              "type": "string",
              "id": 2
            }
          }
        },
        "ReqCreateJPWebMoneyOrder": {
          "fields": {
            "goods_id": {
              "type": "uint32",
              "id": 1
            },
            "client_type": {
              "type": "uint32",
              "id": 2
            },
            "account_id": {
              "type": "uint32",
              "id": 3
            },
            "return_url": {
              "type": "string",
              "id": 4
            },
            "access_token": {
              "type": "string",
              "id": 5
            }
          }
        },
        "ResCreateJPWebMoneyOrder": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "order_id": {
              "type": "string",
              "id": 2
            }
          }
        },
        "ReqCreateJPSoftbankOrder": {
          "fields": {
            "goods_id": {
              "type": "uint32",
              "id": 1
            },
            "client_type": {
              "type": "uint32",
              "id": 2
            },
            "account_id": {
              "type": "uint32",
              "id": 3
            },
            "return_url": {
              "type": "string",
              "id": 4
            },
            "access_token": {
              "type": "string",
              "id": 5
            }
          }
        },
        "ResCreateJPSoftbankOrder": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "order_id": {
              "type": "string",
              "id": 2
            }
          }
        },
        "ReqCreateENPaypalOrder": {
          "fields": {
            "goods_id": {
              "type": "uint32",
              "id": 1
            },
            "client_type": {
              "type": "uint32",
              "id": 2
            },
            "account_id": {
              "type": "uint32",
              "id": 3
            },
            "return_url": {
              "type": "string",
              "id": 4
            },
            "access_token": {
              "type": "string",
              "id": 5
            }
          }
        },
        "ResCreateENPaypalOrder": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "order_id": {
              "type": "string",
              "id": 2
            }
          }
        },
        "ReqCreateENJCBOrder": {
          "fields": {
            "goods_id": {
              "type": "uint32",
              "id": 1
            },
            "client_type": {
              "type": "uint32",
              "id": 2
            },
            "account_id": {
              "type": "uint32",
              "id": 3
            },
            "return_url": {
              "type": "string",
              "id": 4
            },
            "access_token": {
              "type": "string",
              "id": 5
            }
          }
        },
        "ResCreateENJCBOrder": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "order_id": {
              "type": "string",
              "id": 2
            }
          }
        },
        "ReqCreateENMasterCardOrder": {
          "fields": {
            "goods_id": {
              "type": "uint32",
              "id": 1
            },
            "client_type": {
              "type": "uint32",
              "id": 2
            },
            "account_id": {
              "type": "uint32",
              "id": 3
            },
            "return_url": {
              "type": "string",
              "id": 4
            },
            "access_token": {
              "type": "string",
              "id": 5
            }
          }
        },
        "ResCreateENMasterCardOrder": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "order_id": {
              "type": "string",
              "id": 2
            }
          }
        },
        "ReqCreateENVisaOrder": {
          "fields": {
            "goods_id": {
              "type": "uint32",
              "id": 1
            },
            "client_type": {
              "type": "uint32",
              "id": 2
            },
            "account_id": {
              "type": "uint32",
              "id": 3
            },
            "return_url": {
              "type": "string",
              "id": 4
            },
            "access_token": {
              "type": "string",
              "id": 5
            }
          }
        },
        "ResCreateENVisaOrder": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "order_id": {
              "type": "string",
              "id": 2
            }
          }
        },
        "ReqCreateENAlipayOrder": {
          "fields": {
            "goods_id": {
              "type": "uint32",
              "id": 1
            },
            "client_type": {
              "type": "uint32",
              "id": 2
            },
            "account_id": {
              "type": "uint32",
              "id": 3
            },
            "return_url": {
              "type": "string",
              "id": 4
            },
            "access_token": {
              "type": "string",
              "id": 5
            }
          }
        },
        "ResCreateENAlipayOrder": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "order_id": {
              "type": "string",
              "id": 2
            }
          }
        },
        "ReqOpenChest": {
          "fields": {
            "chest_id": {
              "type": "uint32",
              "id": 1
            },
            "count": {
              "type": "uint32",
              "id": 2
            },
            "use_ticket": {
              "type": "bool",
              "id": 3
            }
          }
        },
        "ResOpenChest": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "results": {
              "rule": "repeated",
              "type": "OpenResult",
              "id": 2
            },
            "total_open_count": {
              "type": "uint32",
              "id": 3
            }
          }
        },
        "ReqBuyFromChestShop": {
          "fields": {
            "goods_id": {
              "type": "uint32",
              "id": 1
            },
            "count": {
              "type": "uint32",
              "id": 2
            }
          }
        },
        "ResBuyFromChestShop": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "chest_id": {
              "type": "uint32",
              "id": 2
            },
            "consume_count": {
              "type": "uint32",
              "id": 3
            }
          }
        },
        "ResDailySignInInfo": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "sign_in_days": {
              "type": "uint32",
              "id": 2
            }
          }
        },
        "ReqDoActivitySignIn": {
          "fields": {
            "activity_id": {
              "type": "uint32",
              "id": 2
            }
          }
        },
        "ResDoActivitySignIn": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "rewards": {
              "rule": "repeated",
              "type": "RewardData",
              "id": 2
            },
            "sign_in_count": {
              "type": "uint32",
              "id": 3
            }
          },
          "nested": {
            "RewardData": {
              "fields": {
                "resource_id": {
                  "type": "uint32",
                  "id": 1
                },
                "count": {
                  "type": "uint32",
                  "id": 2
                }
              }
            }
          }
        },
        "ResCharacterInfo": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "characters": {
              "rule": "repeated",
              "type": "Character",
              "id": 2
            },
            "skins": {
              "rule": "repeated",
              "type": "uint32",
              "id": 3
            },
            "main_character_id": {
              "type": "uint32",
              "id": 4
            },
            "send_gift_count": {
              "type": "uint32",
              "id": 5
            },
            "send_gift_limit": {
              "type": "uint32",
              "id": 6
            }
          }
        },
        "ReqChangeMainCharacter": {
          "fields": {
            "character_id": {
              "type": "uint32",
              "id": 1
            }
          }
        },
        "ReqChangeCharacterSkin": {
          "fields": {
            "character_id": {
              "type": "uint32",
              "id": 1
            },
            "skin": {
              "type": "uint32",
              "id": 2
            }
          }
        },
        "ReqChangeCharacterView": {
          "fields": {
            "character_id": {
              "type": "uint32",
              "id": 1
            },
            "slot": {
              "type": "uint32",
              "id": 2
            },
            "item_id": {
              "type": "uint32",
              "id": 3
            }
          }
        },
        "ReqSendGiftToCharacter": {
          "fields": {
            "character_id": {
              "type": "uint32",
              "id": 1
            },
            "gifts": {
              "rule": "repeated",
              "type": "Gift",
              "id": 2
            }
          },
          "nested": {
            "Gift": {
              "fields": {
                "item_id": {
                  "type": "uint32",
                  "id": 1
                },
                "count": {
                  "type": "uint32",
                  "id": 2
                }
              }
            }
          }
        },
        "ResSendGiftToCharacter": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "level": {
              "type": "uint32",
              "id": 2
            },
            "exp": {
              "type": "uint32",
              "id": 3
            }
          }
        },
        "ReqSellItem": {
          "fields": {
            "sells": {
              "rule": "repeated",
              "type": "Item",
              "id": 1
            }
          },
          "nested": {
            "Item": {
              "fields": {
                "item_id": {
                  "type": "uint32",
                  "id": 1
                },
                "count": {
                  "type": "uint32",
                  "id": 2
                }
              }
            }
          }
        },
        "ResCommonView": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "slots": {
              "rule": "repeated",
              "type": "Slot",
              "id": 2
            }
          },
          "nested": {
            "Slot": {
              "fields": {
                "slot": {
                  "type": "uint32",
                  "id": 1
                },
                "value": {
                  "type": "uint32",
                  "id": 2
                }
              }
            }
          }
        },
        "ReqChangeCommonView": {
          "fields": {
            "slot": {
              "type": "uint32",
              "id": 1
            },
            "value": {
              "type": "uint32",
              "id": 2
            }
          }
        },
        "ReqUpgradeCharacter": {
          "fields": {
            "character_id": {
              "type": "uint32",
              "id": 1
            }
          }
        },
        "ResUpgradeCharacter": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "character": {
              "type": "Character",
              "id": 2
            }
          }
        },
        "ReqGMCommand": {
          "fields": {
            "command": {
              "type": "string",
              "id": 1
            }
          }
        },
        "ResShopInfo": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "shop_info": {
              "type": "ShopInfo",
              "id": 2
            }
          }
        },
        "ReqBuyFromShop": {
          "fields": {
            "goods_id": {
              "type": "uint32",
              "id": 1
            },
            "count": {
              "type": "uint32",
              "id": 2
            },
            "bill_short_cut": {
              "rule": "repeated",
              "type": "BillShortcut",
              "id": 3
            },
            "deal_price": {
              "type": "uint32",
              "id": 4
            }
          }
        },
        "ResBuyFromShop": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "rewards": {
              "rule": "repeated",
              "type": "RewardSlot",
              "id": 2
            }
          }
        },
        "ReqBuyFromZHP": {
          "fields": {
            "goods_id": {
              "type": "uint32",
              "id": 1
            },
            "count": {
              "type": "uint32",
              "id": 2
            }
          }
        },
        "ReqPayMonthTicket": {
          "fields": {
            "ticket_id": {
              "type": "uint32",
              "id": 1
            }
          }
        },
        "ResPayMonthTicket": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "resource_id": {
              "type": "uint32",
              "id": 2
            },
            "resource_count": {
              "type": "uint32",
              "id": 3
            }
          }
        },
        "ResRefreshZHPShop": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "zhp": {
              "type": "ZHPShop",
              "id": 2
            }
          }
        },
        "ResMonthTicketInfo": {
          "fields": {
            "month_ticket_info": {
              "rule": "repeated",
              "type": "MonthTicketInfo",
              "id": 1
            }
          }
        },
        "ReqExchangeCurrency": {
          "fields": {
            "id": {
              "type": "uint32",
              "id": 1
            },
            "count": {
              "type": "uint32",
              "id": 2
            }
          }
        },
        "ResServerSettings": {
          "fields": {
            "settings": {
              "type": "ServerSettings",
              "id": 1
            }
          }
        },
        "ResAccountSettings": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "settings": {
              "rule": "repeated",
              "type": "AccountSetting",
              "id": 2
            }
          }
        },
        "ReqUpdateAccountSettings": {
          "fields": {
            "setting": {
              "type": "AccountSetting",
              "id": 1
            }
          }
        },
        "ResModNicknameTime": {
          "fields": {
            "last_mod_time": {
              "type": "uint32",
              "id": 1
            }
          }
        },
        "ResMisc": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "recharged_list": {
              "rule": "repeated",
              "type": "uint32",
              "id": 2
            },
            "faiths": {
              "rule": "repeated",
              "type": "FaithData",
              "id": 3
            }
          }
        },
        "ReqModifySignature": {
          "fields": {
            "signature": {
              "type": "string",
              "id": 1
            }
          }
        },
        "ResIDCardInfo": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "is_authed": {
              "type": "bool",
              "id": 2
            },
            "country": {
              "type": "string",
              "id": 3
            }
          }
        },
        "ReqUpdateIDCardInfo": {
          "fields": {
            "fullname": {
              "type": "string",
              "id": 1
            },
            "card_no": {
              "type": "string",
              "id": 2
            }
          }
        },
        "ResVipReward": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "gained_vip_levels": {
              "rule": "repeated",
              "type": "uint32",
              "id": 2
            }
          }
        },
        "ReqGainVipReward": {
          "fields": {
            "vip_level": {
              "type": "uint32",
              "id": 1
            }
          }
        },
        "ReqFetchCustomizedContestList": {
          "fields": {
            "start": {
              "type": "uint32",
              "id": 1
            },
            "count": {
              "type": "uint32",
              "id": 2
            }
          }
        },
        "ResFetchCustomizedContestList": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "contests": {
              "rule": "repeated",
              "type": "CustomizedContestBase",
              "id": 2
            },
            "follow_contests": {
              "rule": "repeated",
              "type": "CustomizedContestBase",
              "id": 3
            }
          }
        },
        "ReqFetchCustomizedContestExtendInfo": {
          "fields": {
            "uid_list": {
              "rule": "repeated",
              "type": "uint32",
              "id": 1
            }
          }
        },
        "ResFetchCustomizedContestExtendInfo": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "extend_list": {
              "rule": "repeated",
              "type": "CustomizedContestExtend",
              "id": 2
            }
          }
        },
        "ReqEnterCustomizedContest": {
          "fields": {
            "unique_id": {
              "type": "uint32",
              "id": 1
            }
          }
        },
        "ResEnterCustomizedContest": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "detail_info": {
              "type": "CustomizedContestDetail",
              "id": 2
            },
            "player_report": {
              "type": "CustomizedContestPlayerReport",
              "id": 3
            },
            "is_followed": {
              "type": "bool",
              "id": 4
            }
          }
        },
        "ReqFetchCustomizedContestOnlineInfo": {
          "fields": {
            "unique_id": {
              "type": "uint32",
              "id": 1
            }
          }
        },
        "ResFetchCustomizedContestOnlineInfo": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "online_player": {
              "type": "uint32",
              "id": 2
            }
          }
        },
        "ReqFetchCustomizedContestByContestId": {
          "fields": {
            "contest_id": {
              "type": "uint32",
              "id": 1
            }
          }
        },
        "ResFetchCustomizedContestByContestId": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "contest_info": {
              "type": "CustomizedContestAbstract",
              "id": 2
            }
          }
        },
        "ReqStartCustomizedContest": {
          "fields": {
            "unique_id": {
              "type": "uint32",
              "id": 1
            }
          }
        },
        "ReqJoinCustomizedContestChatRoom": {
          "fields": {
            "unique_id": {
              "type": "uint32",
              "id": 1
            }
          }
        },
        "ResJoinCustomizedContestChatRoom": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "chat_history": {
              "rule": "repeated",
              "type": "bytes",
              "id": 2
            }
          }
        },
        "ReqSayChatMessage": {
          "fields": {
            "content": {
              "type": "string",
              "id": 1
            }
          }
        },
        "ReqFetchCustomizedContestGameLiveList": {
          "fields": {
            "unique_id": {
              "type": "uint32",
              "id": 1
            }
          }
        },
        "ResFetchCustomizedContestGameLiveList": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "live_list": {
              "rule": "repeated",
              "type": "GameLiveHead",
              "id": 2
            }
          }
        },
        "ReqFetchCustomizedContestGameRecords": {
          "fields": {
            "unique_id": {
              "type": "uint32",
              "id": 1
            },
            "last_index": {
              "type": "uint32",
              "id": 2
            }
          }
        },
        "ResFetchCustomizedContestGameRecords": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "next_index": {
              "type": "uint32",
              "id": 2
            },
            "record_list": {
              "rule": "repeated",
              "type": "RecordGame",
              "id": 3
            }
          }
        },
        "ReqTargetCustomizedContest": {
          "fields": {
            "unique_id": {
              "type": "uint32",
              "id": 1
            }
          }
        },
        "ResActivityList": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "activities": {
              "rule": "repeated",
              "type": "Activity",
              "id": 2
            }
          }
        },
        "ResAccountActivityData": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "exchange_records": {
              "rule": "repeated",
              "type": "ExchangeRecord",
              "id": 2
            },
            "task_progress_list": {
              "rule": "repeated",
              "type": "TaskProgress",
              "id": 3
            },
            "accumulated_point_list": {
              "rule": "repeated",
              "type": "ActivityAccumulatedPointData",
              "id": 4
            },
            "rank_data_list": {
              "rule": "repeated",
              "type": "ActivityRankPointData",
              "id": 5
            },
            "flip_task_progress_list": {
              "rule": "repeated",
              "type": "TaskProgress",
              "id": 6
            },
            "sign_in_data": {
              "rule": "repeated",
              "type": "ActivitySignInData",
              "id": 7
            }
          },
          "nested": {
            "ActivitySignInData": {
              "fields": {
                "activity_id": {
                  "type": "uint32",
                  "id": 1
                },
                "sign_in_count": {
                  "type": "uint32",
                  "id": 2
                }
              }
            }
          }
        },
        "ReqExchangeActivityItem": {
          "fields": {
            "exchange_id": {
              "type": "uint32",
              "id": 1
            }
          }
        },
        "ResExchangeActivityItem": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "execute_reward": {
              "rule": "repeated",
              "type": "ExecuteReward",
              "id": 2
            }
          }
        },
        "ReqCompleteActivityTask": {
          "fields": {
            "task_id": {
              "type": "uint32",
              "id": 1
            }
          }
        },
        "ReqRecieveActivityFlipTask": {
          "fields": {
            "task_id": {
              "type": "uint32",
              "id": 1
            }
          }
        },
        "ResRecieveActivityFlipTask": {
          "fields": {
            "count": {
              "type": "uint32",
              "id": 1
            }
          }
        },
        "ReqFetchActivityFlipInfo": {
          "fields": {
            "activity_id": {
              "type": "uint32",
              "id": 1
            }
          }
        },
        "ResFetchActivityFlipInfo": {
          "fields": {
            "rewards": {
              "rule": "repeated",
              "type": "uint32",
              "id": 1
            },
            "count": {
              "type": "uint32",
              "id": 2
            }
          }
        },
        "ReqGainAccumulatedPointActivityReward": {
          "fields": {
            "activity_id": {
              "type": "uint32",
              "id": 1
            },
            "reward_id": {
              "type": "uint32",
              "id": 2
            }
          }
        },
        "ReqFetchRankPointLeaderboard": {
          "fields": {
            "leaderboard_id": {
              "type": "uint32",
              "id": 1
            }
          }
        },
        "ResFetchRankPointLeaderboard": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "items": {
              "rule": "repeated",
              "type": "Item",
              "id": 2
            },
            "last_refresh_time": {
              "type": "uint32",
              "id": 3
            }
          },
          "nested": {
            "Item": {
              "fields": {
                "account_id": {
                  "type": "uint32",
                  "id": 1
                },
                "rank": {
                  "type": "uint32",
                  "id": 2
                },
                "view": {
                  "type": "PlayerBaseView",
                  "id": 3
                },
                "point": {
                  "type": "uint32",
                  "id": 4
                }
              }
            }
          }
        },
        "ReqGainRankPointReward": {
          "fields": {
            "leaderboard_id": {
              "type": "uint32",
              "id": 1
            },
            "activity_id": {
              "type": "uint32",
              "id": 2
            }
          }
        },
        "ActionMJStart": {
          "fields": {}
        },
        "ActionNewRound": {
          "fields": {
            "chang": {
              "type": "uint32",
              "id": 1
            },
            "ju": {
              "type": "uint32",
              "id": 2
            },
            "ben": {
              "type": "uint32",
              "id": 3
            },
            "tiles": {
              "rule": "repeated",
              "type": "string",
              "id": 4
            },
            "dora": {
              "type": "string",
              "id": 5
            },
            "scores": {
              "rule": "repeated",
              "type": "int32",
              "id": 6
            },
            "operation": {
              "type": "OptionalOperationList",
              "id": 7
            },
            "liqibang": {
              "type": "uint32",
              "id": 8
            },
            "tingpais0": {
              "rule": "repeated",
              "type": "TingPaiDiscardInfo",
              "id": 9
            },
            "tingpais1": {
              "rule": "repeated",
              "type": "TingPaiInfo",
              "id": 10
            },
            "al": {
              "type": "bool",
              "id": 11
            },
            "md5": {
              "type": "string",
              "id": 12
            },
            "left_tile_count": {
              "type": "uint32",
              "id": 13
            },
            "doras": {
              "rule": "repeated",
              "type": "string",
              "id": 14
            }
          }
        },
        "RecordNewRound": {
          "fields": {
            "chang": {
              "type": "uint32",
              "id": 1
            },
            "ju": {
              "type": "uint32",
              "id": 2
            },
            "ben": {
              "type": "uint32",
              "id": 3
            },
            "dora": {
              "type": "string",
              "id": 4
            },
            "scores": {
              "rule": "repeated",
              "type": "int32",
              "id": 5
            },
            "liqibang": {
              "type": "uint32",
              "id": 6
            },
            "tiles0": {
              "rule": "repeated",
              "type": "string",
              "id": 7
            },
            "tiles1": {
              "rule": "repeated",
              "type": "string",
              "id": 8
            },
            "tiles2": {
              "rule": "repeated",
              "type": "string",
              "id": 9
            },
            "tiles3": {
              "rule": "repeated",
              "type": "string",
              "id": 10
            },
            "tingpai": {
              "rule": "repeated",
              "type": "TingPai",
              "id": 11
            },
            "operation": {
              "type": "OptionalOperationList",
              "id": 12
            },
            "md5": {
              "type": "string",
              "id": 13
            },
            "paishan": {
              "type": "string",
              "id": 14
            },
            "left_tile_count": {
              "type": "uint32",
              "id": 15
            },
            "doras": {
              "rule": "repeated",
              "type": "string",
              "id": 16
            }
          },
          "nested": {
            "TingPai": {
              "fields": {
                "seat": {
                  "type": "uint32",
                  "id": 1
                },
                "tingpais1": {
                  "rule": "repeated",
                  "type": "TingPaiInfo",
                  "id": 2
                }
              }
            }
          }
        },
        "GameSnapshot": {
          "fields": {
            "chang": {
              "type": "uint32",
              "id": 1
            },
            "ju": {
              "type": "uint32",
              "id": 2
            },
            "ben": {
              "type": "uint32",
              "id": 3
            },
            "index_player": {
              "type": "uint32",
              "id": 4
            },
            "left_tile_count": {
              "type": "uint32",
              "id": 5
            },
            "hands": {
              "rule": "repeated",
              "type": "string",
              "id": 6
            },
            "doras": {
              "rule": "repeated",
              "type": "string",
              "id": 7
            },
            "liqibang": {
              "type": "uint32",
              "id": 8
            },
            "players": {
              "rule": "repeated",
              "type": "PlayerSnapshot",
              "id": 9
            },
            "zhenting": {
              "type": "bool",
              "id": 10
            }
          },
          "nested": {
            "PlayerSnapshot": {
              "fields": {
                "score": {
                  "type": "int32",
                  "id": 1
                },
                "liqiposition": {
                  "type": "int32",
                  "id": 2
                },
                "tilenum": {
                  "type": "uint32",
                  "id": 3
                },
                "qipais": {
                  "rule": "repeated",
                  "type": "string",
                  "id": 4
                },
                "mings": {
                  "rule": "repeated",
                  "type": "Fulu",
                  "id": 5
                }
              },
              "nested": {
                "Fulu": {
                  "fields": {
                    "type": {
                      "type": "uint32",
                      "id": 1
                    },
                    "tile": {
                      "rule": "repeated",
                      "type": "string",
                      "id": 2
                    },
                    "from": {
                      "rule": "repeated",
                      "type": "uint32",
                      "id": 3
                    }
                  }
                }
              }
            }
          }
        },
        "ActionPrototype": {
          "fields": {
            "step": {
              "type": "uint32",
              "id": 1
            },
            "name": {
              "type": "string",
              "id": 2
            },
            "data": {
              "type": "bytes",
              "id": 3
            }
          }
        },
        "GameDetailRecords": {
          "fields": {
            "records": {
              "rule": "repeated",
              "type": "bytes",
              "id": 1
            }
          }
        },
        "OptionalOperation": {
          "fields": {
            "type": {
              "type": "uint32",
              "id": 1
            },
            "combination": {
              "rule": "repeated",
              "type": "string",
              "id": 2
            }
          }
        },
        "OptionalOperationList": {
          "fields": {
            "seat": {
              "type": "uint32",
              "id": 1
            },
            "operation_list": {
              "rule": "repeated",
              "type": "OptionalOperation",
              "id": 2
            },
            "time_add": {
              "type": "uint32",
              "id": 4
            },
            "time_fixed": {
              "type": "uint32",
              "id": 5
            }
          }
        },
        "LiQiSuccess": {
          "fields": {
            "seat": {
              "type": "uint32",
              "id": 1
            },
            "score": {
              "type": "int32",
              "id": 2
            },
            "liqibang": {
              "type": "uint32",
              "id": 3
            }
          }
        },
        "FanInfo": {
          "fields": {
            "name": {
              "type": "string",
              "id": 1
            },
            "val": {
              "type": "uint32",
              "id": 2
            },
            "id": {
              "type": "uint32",
              "id": 3
            }
          }
        },
        "HuleInfo": {
          "fields": {
            "hand": {
              "rule": "repeated",
              "type": "string",
              "id": 1
            },
            "ming": {
              "rule": "repeated",
              "type": "string",
              "id": 2
            },
            "hu_tile": {
              "type": "string",
              "id": 3
            },
            "seat": {
              "type": "uint32",
              "id": 4
            },
            "zimo": {
              "type": "bool",
              "id": 5
            },
            "qinjia": {
              "type": "bool",
              "id": 6
            },
            "liqi": {
              "type": "bool",
              "id": 7
            },
            "doras": {
              "rule": "repeated",
              "type": "string",
              "id": 8
            },
            "li_doras": {
              "rule": "repeated",
              "type": "string",
              "id": 9
            },
            "yiman": {
              "type": "bool",
              "id": 10
            },
            "count": {
              "type": "uint32",
              "id": 11
            },
            "fans": {
              "rule": "repeated",
              "type": "FanInfo",
              "id": 12
            },
            "fu": {
              "type": "uint32",
              "id": 13
            },
            "title": {
              "type": "string",
              "id": 14
            },
            "point_rong": {
              "type": "uint32",
              "id": 15
            },
            "point_zimo_qin": {
              "type": "uint32",
              "id": 16
            },
            "point_zimo_xian": {
              "type": "uint32",
              "id": 17
            },
            "title_id": {
              "type": "uint32",
              "id": 18
            },
            "point_sum": {
              "type": "uint32",
              "id": 19
            }
          }
        },
        "TingPaiInfo": {
          "fields": {
            "tile": {
              "type": "string",
              "id": 1
            },
            "haveyi": {
              "type": "bool",
              "id": 2
            },
            "yiman": {
              "type": "bool",
              "id": 3
            },
            "count": {
              "type": "uint32",
              "id": 4
            },
            "fu": {
              "type": "uint32",
              "id": 5
            },
            "biao_dora_count": {
              "type": "uint32",
              "id": 6
            }
          }
        },
        "TingPaiDiscardInfo": {
          "fields": {
            "tile": {
              "type": "string",
              "id": 1
            },
            "zhenting": {
              "type": "bool",
              "id": 2
            },
            "infos": {
              "rule": "repeated",
              "type": "TingPaiInfo",
              "id": 3
            }
          }
        },
        "GameEnd": {
          "fields": {
            "scores": {
              "rule": "repeated",
              "type": "int32",
              "id": 1
            }
          }
        },
        "ActionDiscardTile": {
          "fields": {
            "seat": {
              "type": "uint32",
              "id": 1
            },
            "tile": {
              "type": "string",
              "id": 2
            },
            "is_liqi": {
              "type": "bool",
              "id": 3
            },
            "operation": {
              "type": "OptionalOperationList",
              "id": 4
            },
            "moqie": {
              "type": "bool",
              "id": 5
            },
            "zhenting": {
              "type": "bool",
              "id": 6
            },
            "tingpais": {
              "rule": "repeated",
              "type": "TingPaiInfo",
              "id": 7
            },
            "doras": {
              "rule": "repeated",
              "type": "string",
              "id": 8
            },
            "is_wliqi": {
              "type": "bool",
              "id": 9
            }
          }
        },
        "RecordDiscardTile": {
          "fields": {
            "seat": {
              "type": "uint32",
              "id": 1
            },
            "tile": {
              "type": "string",
              "id": 2
            },
            "is_liqi": {
              "type": "bool",
              "id": 3
            },
            "moqie": {
              "type": "bool",
              "id": 5
            },
            "zhenting": {
              "rule": "repeated",
              "type": "bool",
              "id": 6
            },
            "tingpais": {
              "rule": "repeated",
              "type": "TingPaiInfo",
              "id": 7
            },
            "doras": {
              "rule": "repeated",
              "type": "string",
              "id": 8
            },
            "is_wliqi": {
              "type": "bool",
              "id": 9
            },
            "operations": {
              "rule": "repeated",
              "type": "OptionalOperationList",
              "id": 10
            }
          }
        },
        "ActionDealTile": {
          "fields": {
            "seat": {
              "type": "uint32",
              "id": 1
            },
            "tile": {
              "type": "string",
              "id": 2
            },
            "left_tile_count": {
              "type": "uint32",
              "id": 3
            },
            "operation": {
              "type": "OptionalOperationList",
              "id": 4
            },
            "liqi": {
              "type": "LiQiSuccess",
              "id": 5
            },
            "doras": {
              "rule": "repeated",
              "type": "string",
              "id": 6
            },
            "zhenting": {
              "type": "bool",
              "id": 7
            },
            "tingpais": {
              "rule": "repeated",
              "type": "TingPaiDiscardInfo",
              "id": 8
            }
          }
        },
        "RecordDealTile": {
          "fields": {
            "seat": {
              "type": "uint32",
              "id": 1
            },
            "tile": {
              "type": "string",
              "id": 2
            },
            "left_tile_count": {
              "type": "uint32",
              "id": 3
            },
            "liqi": {
              "type": "LiQiSuccess",
              "id": 5
            },
            "doras": {
              "rule": "repeated",
              "type": "string",
              "id": 6
            },
            "zhenting": {
              "rule": "repeated",
              "type": "bool",
              "id": 7
            },
            "operation": {
              "type": "OptionalOperationList",
              "id": 8
            }
          }
        },
        "ActionChiPengGang": {
          "fields": {
            "seat": {
              "type": "uint32",
              "id": 1
            },
            "type": {
              "type": "uint32",
              "id": 2
            },
            "tiles": {
              "rule": "repeated",
              "type": "string",
              "id": 3
            },
            "froms": {
              "rule": "repeated",
              "type": "uint32",
              "id": 4
            },
            "liqi": {
              "type": "LiQiSuccess",
              "id": 5
            },
            "operation": {
              "type": "OptionalOperationList",
              "id": 6
            },
            "zhenting": {
              "type": "bool",
              "id": 7
            },
            "tingpais": {
              "rule": "repeated",
              "type": "TingPaiDiscardInfo",
              "id": 8
            }
          }
        },
        "RecordChiPengGang": {
          "fields": {
            "seat": {
              "type": "uint32",
              "id": 1
            },
            "type": {
              "type": "uint32",
              "id": 2
            },
            "tiles": {
              "rule": "repeated",
              "type": "string",
              "id": 3
            },
            "froms": {
              "rule": "repeated",
              "type": "uint32",
              "id": 4
            },
            "liqi": {
              "type": "LiQiSuccess",
              "id": 5
            },
            "zhenting": {
              "rule": "repeated",
              "type": "bool",
              "id": 7
            },
            "operation": {
              "type": "OptionalOperationList",
              "id": 8
            }
          }
        },
        "ActionAnGangAddGang": {
          "fields": {
            "seat": {
              "type": "uint32",
              "id": 1
            },
            "type": {
              "type": "uint32",
              "id": 2
            },
            "tiles": {
              "type": "string",
              "id": 3
            },
            "operation": {
              "type": "OptionalOperationList",
              "id": 4
            },
            "doras": {
              "rule": "repeated",
              "type": "string",
              "id": 6
            },
            "zhenting": {
              "type": "bool",
              "id": 7
            },
            "tingpais": {
              "rule": "repeated",
              "type": "TingPaiInfo",
              "id": 8
            }
          }
        },
        "RecordAnGangAddGang": {
          "fields": {
            "seat": {
              "type": "uint32",
              "id": 1
            },
            "type": {
              "type": "uint32",
              "id": 2
            },
            "tiles": {
              "type": "string",
              "id": 3
            },
            "doras": {
              "rule": "repeated",
              "type": "string",
              "id": 6
            },
            "operations": {
              "rule": "repeated",
              "type": "OptionalOperationList",
              "id": 7
            }
          }
        },
        "ActionBaBei": {
          "fields": {
            "seat": {
              "type": "uint32",
              "id": 1
            },
            "operation": {
              "type": "OptionalOperationList",
              "id": 4
            },
            "doras": {
              "rule": "repeated",
              "type": "string",
              "id": 6
            },
            "zhenting": {
              "type": "bool",
              "id": 7
            },
            "tingpais": {
              "rule": "repeated",
              "type": "TingPaiInfo",
              "id": 8
            },
            "moqie": {
              "type": "bool",
              "id": 9
            }
          }
        },
        "RecordBaBei": {
          "fields": {
            "seat": {
              "type": "uint32",
              "id": 1
            },
            "doras": {
              "rule": "repeated",
              "type": "string",
              "id": 6
            },
            "operations": {
              "rule": "repeated",
              "type": "OptionalOperationList",
              "id": 7
            },
            "moqie": {
              "type": "bool",
              "id": 8
            }
          }
        },
        "ActionHule": {
          "fields": {
            "hules": {
              "rule": "repeated",
              "type": "HuleInfo",
              "id": 1
            },
            "old_scores": {
              "rule": "repeated",
              "type": "int32",
              "id": 2
            },
            "delta_scores": {
              "rule": "repeated",
              "type": "int32",
              "id": 3
            },
            "wait_timeout": {
              "type": "uint32",
              "id": 4
            },
            "scores": {
              "rule": "repeated",
              "type": "int32",
              "id": 5
            },
            "gameend": {
              "type": "GameEnd",
              "id": 6
            },
            "doras": {
              "rule": "repeated",
              "type": "string",
              "id": 7
            }
          }
        },
        "RecordHule": {
          "fields": {
            "hules": {
              "rule": "repeated",
              "type": "HuleInfo",
              "id": 1
            },
            "old_scores": {
              "rule": "repeated",
              "type": "int32",
              "id": 2
            },
            "delta_scores": {
              "rule": "repeated",
              "type": "int32",
              "id": 3
            },
            "wait_timeout": {
              "type": "uint32",
              "id": 4
            },
            "scores": {
              "rule": "repeated",
              "type": "int32",
              "id": 5
            },
            "gameend": {
              "type": "GameEnd",
              "id": 6
            },
            "doras": {
              "rule": "repeated",
              "type": "string",
              "id": 7
            }
          }
        },
        "ActionLiuJu": {
          "fields": {
            "type": {
              "type": "uint32",
              "id": 1
            },
            "gameend": {
              "type": "GameEnd",
              "id": 2
            },
            "seat": {
              "type": "uint32",
              "id": 3
            },
            "tiles": {
              "rule": "repeated",
              "type": "string",
              "id": 4
            },
            "liqi": {
              "type": "LiQiSuccess",
              "id": 5
            },
            "allplayertiles": {
              "rule": "repeated",
              "type": "string",
              "id": 6
            }
          }
        },
        "RecordLiuJu": {
          "fields": {
            "type": {
              "type": "uint32",
              "id": 1
            },
            "gameend": {
              "type": "GameEnd",
              "id": 2
            },
            "seat": {
              "type": "uint32",
              "id": 3
            },
            "tiles": {
              "rule": "repeated",
              "type": "string",
              "id": 4
            },
            "liqi": {
              "type": "LiQiSuccess",
              "id": 5
            },
            "allplayertiles": {
              "rule": "repeated",
              "type": "string",
              "id": 6
            }
          }
        },
        "NoTilePlayerInfo": {
          "fields": {
            "tingpai": {
              "type": "bool",
              "id": 3
            },
            "hand": {
              "rule": "repeated",
              "type": "string",
              "id": 4
            },
            "tings": {
              "rule": "repeated",
              "type": "TingPaiInfo",
              "id": 5
            }
          }
        },
        "NoTileScoreInfo": {
          "fields": {
            "seat": {
              "type": "uint32",
              "id": 1
            },
            "old_scores": {
              "rule": "repeated",
              "type": "int32",
              "id": 2
            },
            "delta_scores": {
              "rule": "repeated",
              "type": "int32",
              "id": 3
            },
            "hand": {
              "rule": "repeated",
              "type": "string",
              "id": 4
            },
            "ming": {
              "rule": "repeated",
              "type": "string",
              "id": 5
            },
            "doras": {
              "rule": "repeated",
              "type": "string",
              "id": 6
            },
            "score": {
              "type": "uint32",
              "id": 7
            }
          }
        },
        "ActionNoTile": {
          "fields": {
            "liujumanguan": {
              "type": "bool",
              "id": 1
            },
            "players": {
              "rule": "repeated",
              "type": "NoTilePlayerInfo",
              "id": 2
            },
            "scores": {
              "rule": "repeated",
              "type": "NoTileScoreInfo",
              "id": 3
            },
            "gameend": {
              "type": "bool",
              "id": 4
            }
          }
        },
        "RecordNoTile": {
          "fields": {
            "liujumanguan": {
              "type": "bool",
              "id": 1
            },
            "players": {
              "rule": "repeated",
              "type": "NoTilePlayerInfo",
              "id": 2
            },
            "scores": {
              "rule": "repeated",
              "type": "NoTileScoreInfo",
              "id": 3
            },
            "gameend": {
              "type": "bool",
              "id": 4
            }
          }
        },
        "FastTest": {
          "methods": {
            "authGame": {
              "requestType": "ReqAuthGame",
              "responseType": "ResAuthGame"
            },
            "enterGame": {
              "requestType": "ReqCommon",
              "responseType": "ResEnterGame"
            },
            "syncGame": {
              "requestType": "ReqSyncGame",
              "responseType": "ResSyncGame"
            },
            "finishSyncGame": {
              "requestType": "ReqCommon",
              "responseType": "ResCommon"
            },
            "terminateGame": {
              "requestType": "ReqCommon",
              "responseType": "ResCommon"
            },
            "inputOperation": {
              "requestType": "ReqSelfOperation",
              "responseType": "ResCommon"
            },
            "inputChiPengGang": {
              "requestType": "ReqChiPengGang",
              "responseType": "ResCommon"
            },
            "confirmNewRound": {
              "requestType": "ReqCommon",
              "responseType": "ResCommon"
            },
            "broadcastInGame": {
              "requestType": "ReqBroadcastInGame",
              "responseType": "ResCommon"
            },
            "inputGameGMCommand": {
              "requestType": "ReqGMCommandInGaming",
              "responseType": "ResCommon"
            },
            "fetchGamePlayerState": {
              "requestType": "ReqCommon",
              "responseType": "ResGamePlayerState"
            },
            "checkNetworkDelay": {
              "requestType": "ReqCommon",
              "responseType": "ResCommon"
            }
          }
        },
        "ReqAuthGame": {
          "fields": {
            "account_id": {
              "type": "uint32",
              "id": 1
            },
            "token": {
              "type": "string",
              "id": 2
            },
            "game_uuid": {
              "type": "string",
              "id": 3
            }
          }
        },
        "ResAuthGame": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "players": {
              "rule": "repeated",
              "type": "PlayerGameView",
              "id": 2
            },
            "seat_list": {
              "rule": "repeated",
              "type": "uint32",
              "id": 3
            },
            "is_game_start": {
              "type": "bool",
              "id": 4
            },
            "game_config": {
              "type": "GameConfig",
              "id": 5
            },
            "ready_id_list": {
              "rule": "repeated",
              "type": "uint32",
              "id": 6
            }
          }
        },
        "GameRestore": {
          "fields": {
            "snapshot": {
              "type": "GameSnapshot",
              "id": 1
            },
            "actions": {
              "rule": "repeated",
              "type": "ActionPrototype",
              "id": 2
            },
            "passed_waiting_time": {
              "type": "uint32",
              "id": 3
            },
            "game_state": {
              "type": "uint32",
              "id": 4
            },
            "start_time": {
              "type": "uint32",
              "id": 5
            },
            "last_pause_time_ms": {
              "type": "uint32",
              "id": 6
            }
          }
        },
        "ResEnterGame": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "is_end": {
              "type": "bool",
              "id": 2
            },
            "step": {
              "type": "uint32",
              "id": 3
            },
            "game_restore": {
              "type": "GameRestore",
              "id": 4
            }
          }
        },
        "ReqSyncGame": {
          "fields": {
            "round_id": {
              "type": "string",
              "id": 1
            },
            "step": {
              "type": "uint32",
              "id": 2
            }
          }
        },
        "ResSyncGame": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "is_end": {
              "type": "bool",
              "id": 2
            },
            "step": {
              "type": "uint32",
              "id": 3
            },
            "game_restore": {
              "type": "GameRestore",
              "id": 4
            }
          }
        },
        "ReqSelfOperation": {
          "fields": {
            "type": {
              "type": "uint32",
              "id": 1
            },
            "index": {
              "type": "uint32",
              "id": 2
            },
            "tile": {
              "type": "string",
              "id": 3
            },
            "cancel_operation": {
              "type": "bool",
              "id": 4
            },
            "moqie": {
              "type": "bool",
              "id": 5
            },
            "timeuse": {
              "type": "uint32",
              "id": 6
            }
          }
        },
        "ReqChiPengGang": {
          "fields": {
            "type": {
              "type": "uint32",
              "id": 1
            },
            "index": {
              "type": "uint32",
              "id": 2
            },
            "cancel_operation": {
              "type": "bool",
              "id": 3
            },
            "timeuse": {
              "type": "uint32",
              "id": 6
            }
          }
        },
        "ReqBroadcastInGame": {
          "fields": {
            "content": {
              "type": "string",
              "id": 1
            },
            "except_self": {
              "type": "bool",
              "id": 2
            }
          }
        },
        "ReqGMCommandInGaming": {
          "fields": {
            "json_data": {
              "type": "string",
              "id": 1
            }
          }
        },
        "ResGamePlayerState": {
          "fields": {
            "error": {
              "type": "Error",
              "id": 1
            },
            "state_list": {
              "rule": "repeated",
              "type": "GamePlayerState",
              "id": 2
            }
          }
        },
        "NotifyNewGame": {
          "fields": {
            "game_uuid": {
              "type": "string",
              "id": 1
            },
            "player_list": {
              "rule": "repeated",
              "type": "string",
              "id": 2
            }
          }
        },
        "NotifyPlayerLoadGameReady": {
          "fields": {
            "ready_id_list": {
              "rule": "repeated",
              "type": "uint32",
              "id": 1
            }
          }
        },
        "NotifyGameBroadcast": {
          "fields": {
            "seat": {
              "type": "uint32",
              "id": 1
            },
            "content": {
              "type": "string",
              "id": 2
            }
          }
        },
        "NotifyGameEndResult": {
          "fields": {
            "result": {
              "type": "GameEndResult",
              "id": 1
            }
          }
        },
        "NotifyGameTerminate": {
          "fields": {
            "reason": {
              "type": "string",
              "id": 1
            }
          }
        },
        "NotifyPlayerConnectionState": {
          "fields": {
            "seat": {
              "type": "uint32",
              "id": 1
            },
            "state": {
              "type": "GamePlayerState",
              "id": 2
            }
          }
        },
        "NotifyAccountLevelChange": {
          "fields": {
            "origin": {
              "type": "AccountLevel",
              "id": 1
            },
            "final": {
              "type": "AccountLevel",
              "id": 2
            },
            "type": {
              "type": "uint32",
              "id": 3
            }
          }
        },
        "NotifyGameFinishReward": {
          "fields": {
            "mode_id": {
              "type": "uint32",
              "id": 1
            },
            "level_change": {
              "type": "LevelChange",
              "id": 2
            },
            "match_chest": {
              "type": "MatchChest",
              "id": 3
            },
            "main_character": {
              "type": "MainCharacter",
              "id": 4
            },
            "character_gift": {
              "type": "CharacterGift",
              "id": 5
            }
          },
          "nested": {
            "LevelChange": {
              "fields": {
                "origin": {
                  "type": "AccountLevel",
                  "id": 1
                },
                "final": {
                  "type": "AccountLevel",
                  "id": 2
                },
                "type": {
                  "type": "uint32",
                  "id": 3
                }
              }
            },
            "MatchChest": {
              "fields": {
                "chest_id": {
                  "type": "uint32",
                  "id": 1
                },
                "origin": {
                  "type": "uint32",
                  "id": 2
                },
                "final": {
                  "type": "uint32",
                  "id": 3
                },
                "is_graded": {
                  "type": "bool",
                  "id": 4
                },
                "rewards": {
                  "rule": "repeated",
                  "type": "RewardSlot",
                  "id": 5
                }
              }
            },
            "MainCharacter": {
              "fields": {
                "level": {
                  "type": "uint32",
                  "id": 1
                },
                "exp": {
                  "type": "uint32",
                  "id": 2
                },
                "add": {
                  "type": "uint32",
                  "id": 3
                }
              }
            },
            "CharacterGift": {
              "fields": {
                "origin": {
                  "type": "uint32",
                  "id": 1
                },
                "final": {
                  "type": "uint32",
                  "id": 2
                },
                "add": {
                  "type": "uint32",
                  "id": 3
                },
                "is_graded": {
                  "type": "bool",
                  "id": 4
                }
              }
            }
          }
        },
        "NotifyActivityReward": {
          "fields": {
            "activity_reward": {
              "rule": "repeated",
              "type": "ActivityReward",
              "id": 1
            }
          },
          "nested": {
            "ActivityReward": {
              "fields": {
                "activity_id": {
                  "type": "uint32",
                  "id": 1
                },
                "rewards": {
                  "rule": "repeated",
                  "type": "RewardSlot",
                  "id": 2
                }
              }
            }
          }
        },
        "NotifyActivityPoint": {
          "fields": {
            "activity_points": {
              "rule": "repeated",
              "type": "ActivityPoint",
              "id": 1
            }
          },
          "nested": {
            "ActivityPoint": {
              "fields": {
                "activity_id": {
                  "type": "uint32",
                  "id": 1
                },
                "point": {
                  "type": "uint32",
                  "id": 2
                }
              }
            }
          }
        },
        "NotifyLeaderboardPoint": {
          "fields": {
            "leaderboard_points": {
              "rule": "repeated",
              "type": "LeaderboardPoint",
              "id": 1
            }
          },
          "nested": {
            "LeaderboardPoint": {
              "fields": {
                "leaderboard_id": {
                  "type": "uint32",
                  "id": 1
                },
                "point": {
                  "type": "uint32",
                  "id": 2
                }
              }
            }
          }
        },
        "NotifyGamePause": {
          "fields": {
            "paused": {
              "type": "bool",
              "id": 1
            }
          }
        }
      }
    }
  }
}
