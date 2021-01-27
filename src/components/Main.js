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
            CyberDroid VM is the first Virtual Machine created for Android's Malware Analysis.
            Based on Debian XFCE distro, it also required just 1 processor and 1 GB of RAM.
            You can check all the tools for Malware Analysis in this VM on the 'Tools' page 
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
          <h2 className="major">VM'S TOOLS</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
          <a href="https://github.com/MobSF/Mobile-Security-Framework-MobSF" target="_blank">MobSF</a>
          <div></div>
          <a href="https://github.com/xtiankisutsa/MARA_Framework" target="_blank">MARA Framework</a>
          <div></div>
          <a href="https://github.com/AndroBugs/AndroBugs_Framework" target="_blank">AndroBugs</a>
          <div></div>
          <a href="https://github.com/topics/android-debug-bridge" target="_blank">Android Debug Bridge</a>
          <div></div>
          <a href="https://github.com/ASHWIN990/ADB-Toolkit" target="_blank">Android Debug Bridge CLI</a>
          <div></div>
          <a href="https://portswigger.net/burp/documentation/contents" target="_blank">BurpSuite</a>
          <div></div>
          <a href="https://www.wireshark.org/docs/wsdg_html_chunked/ChSrcGitRepository.html" target="_blank">Wireshark</a>
          <div></div>
          <a href="https://github.com/frida" target="_blank">Frida</a>
          <div></div>
          <a href="https://hashcat.net/wiki/doku.php?id=example_hashes" target="_blank">HashCat</a>
          <div></div>
          <a href="http://steghide.sourceforge.net/" target="_blank">Steghide</a>
          <div></div>
          <a href="https://gchq.github.io/CyberChef/" target="_blank">CyberChef</a>
          <div></div>
          <a href="https://ibotpeaches.github.io/Apktool/" target="_blank">ApkTool</a>
          <div></div>
          <a href="https://github.com/java-decompiler/jd-gui" target="_blank">JD-gui</a>
          <div></div>
          <a href="https://www.virtualbox.org/wiki/Linux_Downloads" target="_blank">VirtualBox</a>
          <div></div>
          <a href="https://www.genymotion.com/download/" target="_blank">Genymotion</a>
          <div></div>
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
          <h2 className="major">DOWNLOAD VM</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Here is where you can find and download your version of CyberDroid
            VM for free!
            Remember to let us know what you think about this VM and write back if
            you have any problem or suggestions!
          </p>
          <a href="" target="_blank">DOWNLOAD FOR VMWARE</a>
          <p></p>
          <a href="" target="_blank">DOWNLOAD FOR VIRTUALBOX</a>
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
