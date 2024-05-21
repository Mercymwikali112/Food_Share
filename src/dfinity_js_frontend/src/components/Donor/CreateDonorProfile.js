import React, { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { createDonorProfile } from "../../utils/foodshare";

const CreateDonorProfile = ({ fetchDonor }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [businessType, setBusinessType] = useState("");

    const handlePublishProfile = async () => {
        try {
            const donor = {
                name,
                email,
                phoneNumber,
                address,
                businessType: { [businessType]: businessType } // Adjust for variant format
            };
            await createDonorProfile(donor).then(res => {
                console.log(res);
                fetchDonor();
            });
        } catch (error) {
            console.log("Failed to create donor profile:", error);
        }
    };

    return (
        <Container className="mt-4">
            <h1>Create Donor Profile</h1>
            <Form>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your phone number"
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your address"
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Business Type</Form.Label>
                    <Form.Control
                        as="select"
                        value={businessType}
                        onChange={e => setBusinessType(e.target.value)}
                    >
                        <option value="">Select Business Type</option>
                        <option value="Restaurant">Restaurant</option>
                        <option value="Grocery">Grocery</option>
                        <option value="Bakery">Bakery</option>
                        <option value="Other">Other</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" onClick={handlePublishProfile}>
                    Publish Profile
                </Button>
            </Form>
        </Container>
    );
};

export default CreateDonorProfile;
