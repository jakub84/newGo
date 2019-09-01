import React, { Component } from 'react';
import Layout from '../layout';
import Header from '../components/indexpage/header/header';
import OurProducts from '../components/indexpage/products/products';
import ContentSection from '../components/indexpage/content-section/ContentSection';
import Button from '../components/indexpage/button/button';
import Contact from '../components/indexpage/contact/contact';
import mainLogoWhite from '../static/assets/header/go_logo-white.svg';
import mainLogo from '../static/assets/header/go_logo.svg';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logoDark: true,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const navigation = document.querySelector('nav');
    const logo = document.querySelector('.logo-container > a > img');
    const scroll = document.documentElement.scrollTop || document.body.scrollTop;
    // if (this.state.lastScroll > scroll) {
    if (scroll > 100) {
      navigation.classList.add('scrolled-menu');
      logo.style.width = '120px';
      this.setState({
        logoDark: false,
      });
    } else {
      navigation.classList.remove('scrolled-menu');
      logo.style.width = '250px';
      this.setState({
        logoDark: true,
      });
    }
    // }
  }

  render() {
    // const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <div className="index-container">
          {/* <PostListing postEdges={postEdges} /> */}
          <Header logo={this.state.logoDark === true ? mainLogo : mainLogoWhite} />
          <OurProducts />
          <ContentSection
            type="dark"
            title="Capicola brisket venison"
            content="Capicola brisket venison, ball tip buffalo ground round alcatra biltong chuck drumstick. Ribeye sirloin boudin t-bone, chuck pork belly short loin burgdoggen brisket. Strip steak shank turducken spare ribs ball tip bresaola, picanha fatback shoulder beef doner venison rump drumstick. Tongue rump flank burgdoggen meatball pastrami strip steak. Tenderloin pig tongue t-bone ball tip, cow venison capicola pancetta shoulder prosciutto pastrami fatback beef ribs chuck. Shankle spare ribs short ribs brisket. Drumstick andouille pancetta, jerky kielbasa turkey boudin capicola pork loin salami tail frankfurter."
          >
            <Button type="white" linkContent="call to action" linkTo="/" />
          </ContentSection>
          <ContentSection
            id="o-nas"
            title="o nas"
            content="Capicola brisket venison, ball tip buffalo ground round alcatra biltong chuck drumstick. Ribeye sirloin boudin t-bone, chuck pork belly short loin burgdoggen brisket. Strip steak shank turducken spare ribs ball tip bresaola, picanha fatback shoulder beef doner venison rump drumstick. Tongue rump flank burgdoggen meatball pastrami strip steak. Tenderloin pig tongue t-bone ball tip, cow venison capicola pancetta shoulder prosciutto pastrami fatback beef ribs chuck. Shankle spare ribs short ribs brisket. Drumstick andouille pancetta, jerky kielbasa turkey boudin capicola pork loin salami tail frankfurter.."
          >
            <Button type="hide" to="/" />
          </ContentSection>
          <Contact
            // id= "kontakt"
            title="kontakt"
            content="Capicola brisket venison, ball tip buffalo ground round alcatra biltong chuck drumstick. Ribeye sirloin boudin t-bone, chuck pork belly short loin burgdoggen brisket. Strip steak shank turducken spare ribs ball tip bresaola, picanha fatback shoulder beef doner venison rump drumstick. Tongue rump flank burgdoggen meatball pastrami strip steak. Tenderloin pig tongue t-bone ball tip, cow venison capicola pancetta shoulder prosciutto pastrami fatback beef ribs chuck. Shankle spare ribs short ribs brisket. Drumstick andouille pancetta, jerky kielbasa turkey boudin capicola pork loin salami tail frankfurter.."
          />
        </div>
      </Layout>
    );
  }
}

export default Index;
