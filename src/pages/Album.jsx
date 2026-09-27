import "../styles/Album.css";

const Album = () => {
  return (
    <div className="album-container">
      <div className="album-col col-left">
        <div className="top-box title-box">
          <h1 className="top-title">Tracklist</h1>
        </div>
        <div className="content-area">
          <div className="content-half top-half tracklist-container">
            <ul className="tracklist">
              <li className="track-item">
                <span className="track-name">FLOW STATE . 001</span>
              </li>
              <li className="track-item">
                <span className="track-name">HANZVEGA . 002</span>
              </li>
              <li className="track-item">
                <span className="track-name">OUTSIDE . 003</span>
              </li>
              <li className="track-item">
                <span className="track-name">SCARECROW . 004</span>
              </li>
              <li className="track-item">
                <span className="track-name">STRAIGHT . 005</span>
              </li>
              <li className="track-item">
                <span className="track-name">YOUM . 006</span>
              </li>
            </ul>
          </div>
          <div className="content-half bottom-half demo-box">
            <a
              href="https://drive.google.com/drive/folders/1-euyXErAXfWy-6X-L-kHlUr0h_UBeBnx"
              target="_blank"
              rel="noopener noreferrer"
              className="demo-link"
            >
              <span className="demo-text">Listen Now ( The Demo )</span>
              <svg
                className="demo-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="album-col col-right">
        <div className="top-box"></div>
        <div className="content-area pic-area">
          <img src="/imgs/3.jpeg" alt="album cover" className="album-pic" />
        </div>
      </div>
    </div>
  );
};

export default Album;
