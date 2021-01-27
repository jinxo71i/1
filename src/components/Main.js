import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">CYBERDROID VM</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            This is the first Virtual Machine for Android Malware Analysis
            ever made.
            In this virtual machine you can find all the tools you need to scan,
            analyze and decompile applications made for Android OS.
            It is based on a Debian XFCE machine and it's so optimized that you can
            used it with just 1 processor and 1 GB of RAM, on virtualbox or vmware.
          </p>
          
          
          
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">USED TOOLS</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
          <a href="https://ibotpeaches.github.io/Apktool/" target="_blank">- APK Tool</a>
          <h1> </h1>
          <a href="https://github.com/MobSF/Mobile-Security-Framework-MobSF" target="_blank">- MobSF</a>
          <h1> </h1>
          <a href="https://github.com/xtiankisutsa/MARA_Framework" target="_blank">- MARA Framework</a>
          <h1> </h1>
          <a href="https://github.com/AndroBugs/AndroBugs_Framework" target="_blank">- AndroBugs</a>
          <h1> </h1>
          <a href="https://github.com/topics/android-debug-bridge" target="_blank">- Android Debug Bridge</a>
          <h1> </h1>
          <a href="https://github.com/ASHWIN990/ADB-Toolkit" target="_blank">- Android Debug Bridge CLI</a>
          <h1> </h1>
          <a href="https://github.com/java-decompiler/jd-gui" target="_blank">- JD-gui</a>
          <h1> </h1>
          <a href="https://www.wireshark.org/docs/wsdg_html_chunked/ChSrcGitRepository.html" target="_blank">- Wireshark</a>
          <h1> </h1>
          <a href="https://github.com/frida" target="_blank">- Frida</a>
          <h1> </h1>
          <a href="https://hashcat.net/wiki/doku.php?id=example_hashes" target="_blank">- HashCat</a>
          <h1> </h1>
          <a href="http://steghide.sourceforge.net/" target="_blank">- Steghide</a>
          <h1> </h1>
          <a href="https://www.virtualbox.org/wiki/Linux_Downloads" target="_blank">- VirtualBox</a>
          <h1> </h1>
          <a href="https://gchq.github.io/CyberChef/" target="_blank">- CyberChef</a>
          <h1> </h1>
          <a href="https://portswigger.net/burp" target="_blank">- BurpSuite</a>
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">DOWNLOAD</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Here is where you can find and download your versione of CyberDroid
            VM for free!
            Remember to let us know what you think about this VM and write back if
            you have any problem or suggestions!
          </p>
          
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">CONTACT</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Messagge</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
