import DataTypes as DT
    
def longitudeManipulation(planes: list[DT.Plane], changeRate: float):
    if (len(planes) != 0):
        for i in range(len(planes)):
            planes[i].longitude += planes[i].longitude * changeRate / 100
            planes[i].validateFlight()
    
def latitudeManipulation(planes: list[DT.Plane], changeRate: float):
    if (len(planes) != 0):
        for i in range(len(planes)):
            planes[i].latitude += planes[i].latitude * changeRate / 100
            planes[i].validateFlight()

# wrapper for manipulation methods to be used at once    
def changeData(planes: list[DT.Plane], latRate, lonRate):
    latitudeManipulation(planes, latRate)
    longitudeManipulation(planes, lonRate)
