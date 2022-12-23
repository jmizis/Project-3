import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi'


const Footer = () => {
  const links = [
        {
            id: 1,
            child: (
                <>
                    Linkedin <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/chris-holtz-7154ba33/',
            style: 'rounded-lg p-2',
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/jmizis/Project-3',
            style: 'rounded-lg p-2',
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:choltz@cacbydesign.com',
            style: 'rounded-lg p-2',
        },
       
      ]
   

  return (

  <footer>

        <Col className='h-30 flex justify-center text-align-center'>
        {links.map(({ id, child, href, style, download }) => (
                    <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md divide-purple-300 bg-gray-500" + " " + style}>
                        <a href={href}
                            className="flex justify-between items-center w-full text-white"
                            download={download}
                            target="_blank"
                            >
                                {child}
                        </a>
                    </li>
                ))}
          
        </Col>



     <div className='h-30 flex justify-center text-align-center p-4'>
            Copyright &copy; CLEAR Business Insight
    </div>    
      
    </footer>
  )
}

export default Footer
