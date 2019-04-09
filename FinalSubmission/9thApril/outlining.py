# USAGE
# python extreme_points.py

# import the necessary packages
import imutils
import cv2
from matplotlib import pyplot as plt


# load the image, convert it to grayscale, and blur it slightly
#image = cv2.imread("sharp.png")
image = cv2.imread("man1d.png")
gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
gray = cv2.GaussianBlur(gray, (9, 9), 0)


# threshold the image, then perform a series of erosions +
# dilations to remove any small regions of noise
thresh = cv2.threshold(gray, 45, 255, cv2.THRESH_BINARY)[1]
thresh = cv2.erode(thresh, None, iterations=2)
thresh = cv2.dilate(thresh, None, iterations=2)

# find contours in thresholded image, then grab the largest
# one
cnts = cv2.findContours(thresh.copy(), cv2.RETR_EXTERNAL,cv2.CHAIN_APPROX_SIMPLE)
cnts = imutils.grab_contours(cnts)
c = max(cnts, key=cv2.contourArea)

# determine the most extreme points along the contour
extLeft = tuple(c[c[:, :, 0].argmin()][0])
extRight = tuple(c[c[:, :, 0].argmax()][0])
extTop = tuple(c[c[:, :, 1].argmin()][0])
extBot = tuple(c[c[:, :, 1].argmax()][0])

# draw the outline of the object, then draw each of the
# extreme points, where the left-most is red, right-most
# is green, top-most is blue, and bottom-most is teal
cv2.drawContours(image, [c], -1, (34, 24, 38), 2)
cv2.circle(image, extLeft, 0, (0, 0, 0), -1)
cv2.circle(image, extRight, 0, (0, 0, 0), -1)
cv2.circle(image, extTop, 0, (0, 0, 0), -1)
cv2.circle(image, extBot, 0, (0, 0, 0), -1)

# show the output image
#plt.imshow(cv2.cvtColor(image, cv2.COLOR_BGR2RGB))
plt.show()
cv2.imwrite("outline.png",image)
