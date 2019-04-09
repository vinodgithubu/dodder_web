import numpy as np
import cv2 as cv
from matplotlib import pyplot as plt

#img = cv.imread('Input Images/amir3.jpg')
img = cv.imread('kid7.png')

mask = np.zeros(img.shape[:2],np.uint8)
bgdModel = np.zeros((1,65),np.float64)
fgdModel = np.zeros((1,65),np.float64)
rect = (1,1,img.shape[1]-3,img.shape[0]-3)
print(img.shape[1])
print(img.shape[0])


cv.grabCut(img,mask,rect,bgdModel,fgdModel,20,cv.GC_INIT_WITH_RECT)
mask2 = np.where((mask==2)|(mask==0),0,1).astype('uint8')
img = img*mask2[:,:,np.newaxis]

cv.imwrite("removed_Background.png",img)
