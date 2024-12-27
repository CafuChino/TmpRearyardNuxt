/* eslint-disable */
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      collection: {
        Row: {
          author: string | null
          created_at: string
          id: number
          type: Database["public"]["Enums"]["e_collection_type"] | null
          updated_at: string | null
          works: number[] | null
        }
        Insert: {
          author?: string | null
          created_at?: string
          id?: number
          type?: Database["public"]["Enums"]["e_collection_type"] | null
          updated_at?: string | null
          works?: number[] | null
        }
        Update: {
          author?: string | null
          created_at?: string
          id?: number
          type?: Database["public"]["Enums"]["e_collection_type"] | null
          updated_at?: string | null
          works?: number[] | null
        }
        Relationships: []
      }
      draft: {
        Row: {
          author: string
          content: Json[] | null
          created_at: string
          deleted_at: string | null
          id: number
          meta: Json | null
          note: string | null
          title: string | null
          updated_at: string | null
        }
        Insert: {
          author: string
          content?: Json[] | null
          created_at?: string
          deleted_at?: string | null
          id?: number
          meta?: Json | null
          note?: string | null
          title?: string | null
          updated_at?: string | null
        }
        Update: {
          author?: string
          content?: Json[] | null
          created_at?: string
          deleted_at?: string | null
          id?: number
          meta?: Json | null
          note?: string | null
          title?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "draft_author_fkey1"
            columns: ["author"]
            isOneToOne: false
            referencedRelation: "user_profile"
            referencedColumns: ["uid"]
          },
        ]
      }
      map_user_block_user: {
        Row: {
          created_at: string
          from: string | null
          id: number
          to: string | null
        }
        Insert: {
          created_at?: string
          from?: string | null
          id?: number
          to?: string | null
        }
        Update: {
          created_at?: string
          from?: string | null
          id?: number
          to?: string | null
        }
        Relationships: []
      }
      map_user_follow: {
        Row: {
          created_at: string
          from: string | null
          id: number
          to: string | null
        }
        Insert: {
          created_at?: string
          from?: string | null
          id?: number
          to?: string | null
        }
        Update: {
          created_at?: string
          from?: string | null
          id?: number
          to?: string | null
        }
        Relationships: []
      }
      user_meta: {
        Row: {
          created_at: string
          id: number
          is_verified: boolean
          uid: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          is_verified: boolean
          uid?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          is_verified?: boolean
          uid?: string | null
        }
        Relationships: []
      }
      user_profile: {
        Row: {
          avatar: string | null
          created_at: string
          id: number
          nickname: string | null
          uid: string | null
        }
        Insert: {
          avatar?: string | null
          created_at?: string
          id?: number
          nickname?: string | null
          uid?: string | null
        }
        Update: {
          avatar?: string | null
          created_at?: string
          id?: number
          nickname?: string | null
          uid?: string | null
        }
        Relationships: []
      }
      work: {
        Row: {
          author: string | null
          blocks: Json[] | null
          created_at: string
          deleted_at: string | null
          id: number
          plainText: string | null
          updated_at: string | null
        }
        Insert: {
          author?: string | null
          blocks?: Json[] | null
          created_at?: string
          deleted_at?: string | null
          id?: number
          plainText?: string | null
          updated_at?: string | null
        }
        Update: {
          author?: string | null
          blocks?: Json[] | null
          created_at?: string
          deleted_at?: string | null
          id?: number
          plainText?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      e_collection_type: "e_collection_list" | "e_collection_series"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
