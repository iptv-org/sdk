export type GuideSource = {
  host: string
  url: string
  format: string
}

export type GuideData = {
  channel: string | null
  feed: string | null
  site: string
  site_id: string
  site_name: string
  lang: string
  sources: GuideSource[]
}
