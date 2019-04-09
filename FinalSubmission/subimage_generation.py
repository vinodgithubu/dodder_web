import numpy as np
from imutils import face_utils
import cv2 as cv
import imutils
from matplotlib import pyplot as plt
import dlib
import os

detector = dlib.get_frontal_face_detector()
predictor = dlib.shape_predictor('shape_predictor_68_face_landmarks.dat')

img = cv.imread('FinalSubmission/Input Images/aa.jpeg')
bgdModel = np.zeros((1,65),np.float64)
fgdModel = np.zeros((1,65),np.float64)
#res = img
ht,wt,c = img.shape
print(ht)
print(wt)
wt=wt*(1000/ht)
ht=1000
print(ht)
print(wt)
res = cv.resize(img,(int(wt),int(ht)), interpolation = cv.INTER_CUBIC)
#plt.imshow(res),plt.colorbar(),plt.show()
mask = np.zeros(res.shape[:2],np.uint8)
gray = cv.cvtColor(res, cv.COLOR_BGR2GRAY)
rects = detector(gray,1)

roi = rects[0] # region of interest
shape = predictor(gray, roi)
shape = face_utils.shape_to_np(shape)

jawline = shape[3:14]


img2 = cv.imread('FinalSubmission/Input Images/aa.jpeg')
height, width = img.shape[:2]
#res = cv.resize(img,(210,250), interpolation = cv.INTER_CUBIC)
print(shape[28][1])
newimg = res[int(shape[28][1] - ((shape[9][1]-shape[28][1]) * 1.5)):shape[9][1]+15, shape[3][0] - (shape[29][0]-shape[3][0]):shape[14][0] + (shape[14][0]-shape[29][0])]
#plt.imshow(newimg),plt.colorbar(),plt.show()

#plt.imshow(img),plt.colorbar(),plt.show()

cv.imwrite("crop.png",newimg)
