import axios from 'axios';
import { subtitleTrackUrl, subtitleTrackParams, youtubeUrl } from './url';

export async function getTranscript(video: string): Promise<string> {
    const params: subtitleTrackParams = { lang: 'de', v: video, fmt: ''};
    const response = await axios.get(subtitleTrackUrl, { params })
        .catch(err => console.warn(err));

    return response !== undefined ? response.data : 'Not Found';
}

export function parseUrl(url: string): string {
    // TODO: make less dodgy
    return url.substring(youtubeUrl.length);
}