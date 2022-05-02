import React, { useState, useEffect } from 'react'
import { Button, Spinner, ModalBody, ModalHeader, Modal, Alert, Table, FormGroup, Label, Input, Col } from 'reactstrap'
import axios from 'axios';

export const Blog = () => {
	let usersList = [
		{
			id: 1,
			name: 'yohannes',
			email: 'yohannes@gmail.com',
			joined: '2022-01-01',
			isSub: true
		},
		{
			id: 2,
			name: 'yohannes',
			email: 'yohannes@gmail.com',
			joined: '2022-01-01',
			isSub: true
		},
		{
			id: 3,
			name: 'yohannes',
			email: 'yohannes@gmail.com',
			joined: '2022-01-01',
			isSub: true
		},
		{
			id: 4,
			name: 'yohannes',
			email: 'yohannes@gmail.com',
			joined: '2022-01-01',
			isSub: true
		},
		{
			id: 5,
			name: 'yohannes',
			email: 'yohannes@gmail.com',
			joined: '2022-01-01',
			isSub: true
		}
	];

	const initialValues = {
		title: '',
		intro: '',
		file_id: '',
		author: '',
		type: '',
		should_notify: true,
		location: '',
		status: ''
	};

	const [isOpened, setOpened] = React.useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isSubmit, setIsSubmit] = useState(false);
	const [blogList, setBlogList] = useState([]);
	const [formValues, setFormValues] = useState(initialValues);
	const [formErrors, setFormErrors] = useState({});
	const [Result, setResult] = useState({});

	const onClickHandle = () => {
		setOpened(!isOpened);
	}

	const handleInputChange = (e) => {
		//console.log(formValues);
		const { value } = e.target;
		setFormValues({
			...formValues,
			[e.target.name]: value
		});
	};

	const handleFileChange = (e) => {
		//console.log(formValues);
		console.log(e.target.files);
		setFormValues({
			...formValues,
			file: e.target.files[0],
			file_id: e.target.files[0].name,
		});
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		//console.log(formErrors);
		//console.log(formValues);
		setFormErrors(validate(formValues));
		setIsSubmit(true);

		//if(Object.keys(formErrors).length === 0 && isSubmit) {
		setIsLoading(true);

		let uploadData = new FormData();
/* 		uploadData.append('file', formValues.file);
		uploadData.append('title', 'formValues.title');
		uploadData.append('intro', formValues.intro);
		uploadData.append('file_id', formValues.file_id);
		uploadData.append('author', formValues.author);
		uploadData.append('type', 'BLOG');
		uploadData.append('should_notify', true);
		uploadData.append('location', formValues.location);
		uploadData.append('status', formValues.status);
 */


		uploadData.file = formValues.file;
 		uploadData.title = formValues.title;
		uploadData.intro = formValues.intro;
		uploadData.file_id = formValues.file_id;
		uploadData.author = formValues.author;
		uploadData.type = 'BLOG';
		uploadData.should_notify = true;
		uploadData.location = formValues.location;
		uploadData.status = formValues.status; 

		const headers = {
			'x-access-token': JSON.parse(sessionStorage.getItem('signInData')).result.token,
			//'Content-Type' : 'multipart/form-data;'
		};

/* 		axios({
			method: 'post',
			url: 'http://localhost:5000/api/news/upload',
			data: fileUpload,
			headers: headers
		}).then(function (res) {
			console.log(res.data);
			setResult(res.data);
			setIsLoading(false);
		}).catch(function (res) {
			console.log(res.data);
			setResult(res.data);
			setIsLoading(false);
		});
 */


		axios({
			method: 'post',
			url: 'http://localhost:5000/api/news/add',
			data: uploadData,
			headers: headers,
			transformRequest: (data) => {
				return data
			}
		}).then(function (res) {
			//handle success
			console.log(res.data);
			setResult(res.data);
			setIsLoading(false);
		}).catch(function (response) {
			//handle error
			console.log(response.data);
			setResult(response.data);
			setIsLoading(false);
		});
		//}
	}

	const validate = (values) => {
		const errors = {};

		if (!values.title && values.title.length === 0) {
			errors.title = "This field is required";
		}

		if (!values.intro && values.intro.length === 0) {
			errors.intro = "This field is required";
		}

		if (!values.file_id && values.file_id.length === 0) {
			errors.file_id = "This field is required";
		}

		if (!values.author && values.author.length === 0) {
			errors.author = "This field is required";
		}

		if (!values.type && values.type.length === 0) {
			errors.type = "This field is required";
		}

		if (!values.should_notify && values.should_notify.length === 0) {
			errors.should_notify = "This field is required";
		}

		if (!values.location && values.location.length === 0) {
			errors.location = "This field is required";
		}

		if (!values.status && values.status.length === 0) {
			errors.status = "This field is required";
		}
	};

	return (
		<div className='container my-5'>
			<div className='text-end px-5'>
				<Button onClick={onClickHandle}>Create +</Button>
			</div>
			<Modal centered isOpen={isOpened}>
				<ModalHeader toggle={onClickHandle}>Create A blog</ModalHeader>
				<ModalBody>
					<FormGroup>
						<Label>Blog Title</Label>
						<Input name='title' id='title' onChange={handleInputChange} />
					</FormGroup>

					<FormGroup>
						<Label>Author</Label>
						<Input name='author' id='author' onChange={handleInputChange} />
					</FormGroup>

					<FormGroup>
						<Label>Location</Label>
						<Input name='location' id='location' onChange={handleInputChange} />
					</FormGroup>

					<FormGroup>
						<Label>Blog description</Label>
						<Input name='intro' id='intro' onChange={handleInputChange} />
					</FormGroup>


					<FormGroup>
						<Label className='px-2'>Should Notify</Label>
						<Input
							type="checkbox"
							name='shouldNotify'

							onChange={handleInputChange}
						/>
					</FormGroup>

					<FormGroup>
						<Label>Markdown File</Label>
						<Input id="exampleFile"
							name="file"
							type="file"
							onChange={handleFileChange} />
					</FormGroup>

					<Alert color='danger'>
						Please check the Markdown file for errors, broken links and other dangerous links before uploading it
						to the server.

						Please fill all options!
					</Alert>
					<Alert color='primary'>
						When Adding Images to blog you might have to upload them to server then add it as link image in the markdown editor
					</Alert>
					<Alert color='primary'>
						Contact the team for any further information
					</Alert>

					<div className='py-3 text-start'>
						{isLoading && <Spinner>Loading...</Spinner>}
						{!isLoading && <Button color="primary" onClick={handleSubmit}>Upload</Button>}
					</div>
				</ModalBody>
			</Modal>
			<Table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Title</th>
						<th>Author</th>
						<th>Uploaded Date</th>
						<th>Views</th>
						<th>Action</th>
					</tr>
				</thead>

				<tbody>
					{
						usersList.map(item => {
							return <tr key={item.id}>
								<th scope="row">{item.id}</th>
								<td>{item.name}</td>
								<td>{item.email}</td>
								<td>{item.joined}</td>
								<td>True</td>
								<td><Button>Delete</Button></td>
							</tr>
						})
					}
				</tbody>
			</Table>
		</div>
	)
}
