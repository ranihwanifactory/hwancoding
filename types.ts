export enum FormatType {
  VIDEO = 'VIDEO',
  AUDIO = 'AUDIO'
}

export enum Quality {
  HIGH = '1080p',
  MEDIUM = '720p',
  LOW = '480p',
  AUDIO_HQ = '320kbps',
  AUDIO_MQ = '192kbps'
}

export interface VideoMetadata {
  id: string;
  title: string;
  author: string;
  thumbnailUrl: string;
  duration: string;
  views: string;
}

export interface DownloadOption {
  type: FormatType;
  quality: Quality;
  size: string;
  extension: string;
}
