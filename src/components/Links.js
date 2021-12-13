import React from 'react';
import { linkedin, github, goodreads, devdotto, instagram, spotify, twitter, youtube } from '../types/images';
import styles from './Links.module.css';
import styled from '@emotion/styled';

const ImgLink = styled.img`
    width: 40px;
    height: 40px; 
    margin-left: 10px;
    margin-right: 10px;
`;

const Links = () => {
    return ( 
        <div className={`${styles.cont_links}`}>
            <a target="_blank" rel="noopener"
                name="LinkedIn"
                href="https://www.linkedin.com/in/rodrigo-bernardino-90bba664/">
                <ImgLink
                    id="1"
                    key="1"
                    src={linkedin.default}
                    className="icon"
                    alt="LinkedIn icon"
                />
            </a>

            <a target="_blank" rel="noopener"
                name="Github"
                href="https://github.com/rodgober">
                <ImgLink
                    id="2"
                    key="2"
                    src={github.default}
                    className="icon"
                    alt="github icon"
                />
            </a>

            <a target="_blank" rel="noopener"
                name="Goodreads"
                href="https://www.goodreads.com/user/show/27312968-rodrigo-bernardino">
                <ImgLink
                    id="3"
                    key="3"
                    src={goodreads.default}
                    className="icon"
                    alt="Goodreads icon"
                />
            </a>

            <a target="_blank" rel="noopener"
                name="Spotify"
                href="https://open.spotify.com/show/73V99aKbK8KacZWGuFKicz">
                <ImgLink
                    id="4"
                    key="4"
                    src={spotify.default}
                    className="icon"
                    alt="Spotify icon"
                />
            </a>
            
            <a target="_blank" rel="noopener"
                name="Twitter"
                href="https://twitter.com/Minnony">
                <ImgLink
                    id="5"
                    key="5"
                    src={twitter.default}
                    className="icon"
                    alt="Twitter icon"
                />
            </a>

            <a target="_blank" rel="noopener"
                name="DevDotTo"
                href="https://dev.to/rodgober">
                <ImgLink
                    id="6"
                    key="6"
                    src={devdotto.default}
                    className="icon"
                    alt="Dev.To icon"
                />
            </a>

            <a target="_blank" rel="noopener"
                name="Instagram"
                href="https://www.instagram.com/rodgoberna/">
                <ImgLink
                    id="7"
                    key="7"
                    src={instagram.default}
                    className="icon"
                    alt="Instagram icon"
                />
            </a>
            
            <a target="_blank" rel="noopener"
                name="YouTube"
                href="https://www.youtube.com/channel/UCGVMNs6Mp3wnIXta-ly915w">
                <ImgLink
                    id="8"
                    key="8"
                    src={youtube.default}
                    className="icon"
                    alt="Youtube icon"
                />
            </a>
        </div>
     );
}
 
export default Links;