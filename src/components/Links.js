import React from 'react';
import { linkedin, github, goodreads, devdotto, instagram, spotify, twitter, youtube, mastodon } from '../types/images';
import styles from './Links.module.css';
import styled from '@emotion/styled';

const Links = () => {
    return ( 
        <div className={`${styles.cont_links}`}>
            <a target="_blank" rel="noopener"
                name="LinkedIn"
                href="https://www.linkedin.com/in/rodrigo-bernardino-90bba664/">
                <img
                    id="1"
                    key="1"
                    src={linkedin.default}
                    className={`${styles.icon}`}
                    alt="LinkedIn icon"
                />
            </a>

            <a target="_blank" rel="noopener"
                name="Github"
                href="https://github.com/rodgober">
                <img
                    id="2"
                    key="2"
                    src={github.default}
                    className={`${styles.icon}`}
                    alt="github icon"
                />
            </a>

            <a target="_blank" rel="noopener"
                name="Goodreads"
                href="https://www.goodreads.com/user/show/27312968-rodrigo-bernardino">
                <img
                    id="3"
                    key="3"
                    src={goodreads.default}
                    className={`${styles.icon}`}
                    alt="Goodreads icon"
                />
            </a>

            <a target="_blank" rel="noopener"
                name="Spotify"
                href="https://open.spotify.com/show/73V99aKbK8KacZWGuFKicz">
                <img
                    id="4"
                    key="4"
                    src={spotify.default}
                    className={`${styles.icon}`}
                    alt="Spotify icon"
                />
            </a>

            <a target="_blank" rel="noopener"
                name="Twitter"
                href="https://mstdn.social/@rodgober">
                <img
                    id="5"
                    key="5"
                    src={mastodon.default}
                    className={`${styles.icon}`}
                    alt="Mastodon icon"
                />
            </a>
            
            <a target="_blank" rel="noopener"
                name="Twitter"
                href="https://twitter.com/Minnony">
                <img
                    id="6"
                    key="6"
                    src={twitter.default}
                    className={`${styles.icon}`}
                    alt="Twitter icon"
                />
            </a>

            <a target="_blank" rel="noopener"
                name="DevDotTo"
                href="https://dev.to/rodgober">
                <img
                    id="7"
                    key="7"
                    src={devdotto.default}
                    className={`${styles.icon}`}
                    alt="Dev.To icon"
                />
            </a>

            <a target="_blank" rel="noopener"
                name="Instagram"
                href="https://www.instagram.com/rodgoberna/">
                <img
                    id="8"
                    key="8"
                    src={instagram.default}
                    className={`${styles.icon}`}
                    alt="Instagram icon"
                />
            </a>
            
            <a target="_blank" rel="noopener"
                name="YouTube"
                href="https://www.youtube.com/channel/UCGVMNs6Mp3wnIXta-ly915w">
                <img
                    id="9"
                    key="9"
                    src={youtube.default}
                    className={`${styles.icon}`}
                    alt="Youtube icon"
                />
            </a>
        </div>
     );
}
 
export default Links;