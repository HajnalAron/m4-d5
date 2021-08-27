import { Table, Container, Row, Col, Button } from "react-bootstrap"
import React from "react"

const MyFooter = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col" lg={12} text-left>
                        <a href="#"><img src="assets/icons/facebook-2-48.png" height="30"></img></a>
                        <a href="#"><img src="assets/icons/instagram-2-48.png" height="30"></img></a>
                        <a href="#"><img src="assets/icons/twitter-2-48.png" height="30"></img></a>
                        <a href="#"><img src="assets/icons/youtube-2-48.png" height="30"></img></a>
                    </div>
                </div>
                <Table style={{ color: "white" }}
                    className="table main-color table-borderless"
                >
                    <thead>
                        <tr>
                            <td>Audio and Subtitles</td>
                            <td>Audio Descriptions</td>
                            <td>Help Center</td>
                            <td>Gift Cards</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Media Center</td>
                            <td>Investor Relations</td>
                            <td>Jobs</td>
                            <td>Terms of Use</td>
                        </tr>
                        <tr>
                            <td>Privacy</td>
                            <td>Legal Notices</td>
                            <td>Cookie Preferences</td>
                            <td>Corporate Information</td>
                        </tr>
                        <tr>
                            <td>Contact Us</td>
                        </tr>
                        <tr>
                            <td>
                                <button type="button" class="btn btn-outline-light">Service Code</button>
                            </td>
                        </tr>

                    </tbody>
                </Table>

            </div>
            <div style={{ textAlign: "left" }}>© 1997-2019 Netflix, Inc.</div>
        </div>

    )
}














export default MyFooter
