import axios from 'axios';
import { subtitleTrackUrl, subtitleTrackParams } from './url';

export async function getTranscript(video: string): Promise<string> {
    const params: subtitleTrackParams = { lang: 'de', v: video, fmt: 'vtt'};
    const response = await axios.get(subtitleTrackUrl, { params })
        .catch(err => console.warn(err));

    return response !== undefined ? response.data : 'Not Found';
}