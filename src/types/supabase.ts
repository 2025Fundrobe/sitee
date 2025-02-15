export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      posts: {
        Row: {
          id: string
          created_at: string
          title: string
          slug: string
          content: string
          excerpt: string
          author: string
          category: string
          image_url: string
          published: boolean
        }
        Insert: {
          id?: string
          created_at?: string
          title: string
          slug: string
          content: string
          excerpt: string
          author: string
          category: string
          image_url: string
          published?: boolean
        }
        Update: {
          id?: string
          created_at?: string
          title?: string
          slug?: string
          content?: string
          excerpt?: string
          author?: string
          category?: string
          image_url?: string
          published?: boolean
        }
      },
      TIPS: {
        Row: {
          id: string
          created_at: string
          title: string
          slug: string
          content: string
          excerpt: string
          author: string
          category: string
          image_url: string
          published: boolean
        }
        Insert: {
          id?: string
          created_at?: string
          title: string
          slug: string
          content: string
          excerpt: string
          author: string
          category: string
          image_url: string
          published?: boolean
        }
        Update: {
          id?: string
          created_at?: string
          title?: string
          slug?: string
          content?: string
          excerpt?: string
          author?: string
          category?: string
          image_url?: string
          published?: boolean
        }
      },
      success_stories: {
        Row: {
          id: string
          created_at: string
          title: string
          high_school_name: string
          instructor_name: string
          amount_raised: string
          content: string
          image_url_1: string
          image_url_2: string
        }
        Insert: {
          id?: string
          created_at?: string
          title: string
          high_school_name: string
          instructor_name: string
          amount_raised: string
          content: string
          image_url_1?: string
          image_url_2?: string
        }
        Update: {
          id?: string
          created_at?: string
          title?: string
          high_school_name?: string
          instructor_name?: string
          amount_raised?: string
          content?: string
          image_url_1?: string
          image_url_2?: string
        }
      }
    }
  }
}