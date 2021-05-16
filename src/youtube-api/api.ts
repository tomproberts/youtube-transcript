import axios from 'axios';
import { subtitleTrackUrl, SubtitleTrackParams, youtubeUrl } from '@/youtube-api/url';
import { parseTranscriptXML } from '@/youtube-api/xml-parser';
import { Transcript } from '@/types';

export async function getTranscript(video: string): Promise<Transcript | undefined> {
    const params: SubtitleTrackParams = { lang: 'de', v: video, fmt: ''};
    const response = await axios.get(subtitleTrackUrl, { params })
        .catch(err => console.warn(err));

    return response === undefined ? undefined : parseTranscriptXML(response.data);
}

export function parseUrl(url: string): string {
    // TODO: make less dodgy
    return url.substring(youtubeUrl.length);
}