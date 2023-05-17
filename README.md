# CAREER DEVELOPMENT WEBSITE


[Demo to website](https://screenrec.com/share/TWNUpkg9EQ)


# INSTALLATION INSTRUCTION
- Click on the green code button on top right corner.
- In HTTPS column copy the url.
- Go to your terminal cd to location of your choice then write "git clone https://github.com/VaibhavNITK/IRIS_Rec23_211CS162_MERN.git  " . You can specify the name of folder after MERN.git, if not specified it will create folder with by default name.
- cd to **backend**
- Run command **npm i** then **npm install --global nodemon** (if not installed) then **npm run dev** on your terminal.(**DONT USE NITK NET**)
- This will be visible on your terminal **Server is listening on port 4000
Database Connected with ac-2idpws3-shard-00-00.aqnwcgv.mongodb.net**
![server running and database connected](https://user-images.githubusercontent.com/95856567/235909083-d60493f1-9099-4dd2-861b-8da59e15c337.png)
- cd to **frontend**
- Run command **npm i** then **npm start** or **npm run start** on your terminal.
- Backend will be running on http://localhost:4000/
- Frontend will be running on http://localhost:3000/


# LIST OF IMPLEMENTED FEATURES
- Whole website is responsive
- Landing Page
- Authentication of admin during login
- Option for admin to create new company 
- Option for admin to update the company if it already exists(like making active true)
- Option for admin to delete the company
- Option for admin to view his profile page
- Option for new users to register
- Authentication of users during login
- All companies with status active visible to users .
- Users fulfilling the requirements(basically there is a branch check criterion) of company can apply to it
- Option for Users to see applied companies
- Options for Users to see profile page.
- Option for POC to update details of company for which he is assigned POC.
- Option for logout for both Users and Admin.

- if you want to login as admin use vaibhavagarwal693@gmail.com as email and vaibhav321 as password . I aslo created register page for admin but then i thought it wont make sense as any one can register as admin so thats why im not using admin register page.


## NON-IMPLEMENTED / PLANNED FEATURES

- There is no option for admin and poc to see whoever has applied to that company although backend is ready but not able to integrate it.
- There is no option for users to upload resume.(will add in future).
- In company branch requirement I'm assuming only one branch and also only one role.

## LIST OF BUGS

- Page needs to refreshed after both user and admin login otherwise it wont work properly.

## SCREENSHOTS
![User Login page](https://user-images.githubusercontent.com/95856567/235907393-609bf83c-a8eb-46a3-9af4-9a4f2da5220a.png)

![Users ProfilePage](https://user-images.githubusercontent.com/95856567/235907745-da6ede53-a7b2-4847-8ce7-d1f6d27b4319.png)

![userRegister](https://user-images.githubusercontent.com/95856567/235907819-94d8911f-4cd1-4a43-be57-91b4953b66ca.png)

![Users applied companies page](https://user-images.githubusercontent.com/95856567/235907947-258d8c5b-cf90-48cb-b7da-9ff78ae6e1f6.png)

![User homepage](https://user-images.githubusercontent.com/95856567/235908005-d2cfa5c2-c4d7-4959-a1eb-8569c3c93288.png)

![Landing Page](https://user-images.githubusercontent.com/95856567/235908136-24b3bcbf-a2ca-4b4f-9930-50942caf9ad3.png)

![POC view page](https://user-images.githubusercontent.com/95856567/235908208-8cabd9c5-387f-4323-a606-db0c82e8b06f.png)

![adminLogin](https://user-images.githubusercontent.com/95856567/235908260-1ffe365b-77e5-4075-9558-f5ded667a2a5.png)

![admin profile page](https://user-images.githubusercontent.com/95856567/235908378-166af923-b471-4a96-ae07-7e45de1fcddf.png)

![admin home page](https://user-images.githubusercontent.com/95856567/235908487-8dd54bdf-663c-4fee-9184-ed6bc0cb61b0.png)

![admin Create company page](https://user-images.githubusercontent.com/95856567/235908542-0446767f-0c11-4aac-8499-5a07a7ff6161.png)


