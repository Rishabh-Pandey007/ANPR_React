import cv2
import easyocr
import sqlite3
from datetime import datetime

# Function to calculate vehicle speed
def calculate_speed(old_frame, new_frame, time_difference, distance_between_points):
    # Your speed calculation logic goes here
    # This can involve image processing, object tracking, and pixel-to-distance conversion
    # For simplicity, let's assume you have a constant speed for demonstration purposes
    constant_speed = 30  # in pixels per second
    return constant_speed

# Function to recognize license plate using EasyOCR
def recognize_license_plate(frame):
    reader = easyocr.Reader(['en'])
    results = reader.readtext(frame)
    if results:
        license_plate_text = results[0][1]
        return license_plate_text
    return None

# Function to save overspeeding data to the database
def save_to_database(timestamp, vehicle_speed, license_plate, plate_image):
    connection = sqlite3.connect("overspeed_database.db")
    cursor = connection.cursor()

    # Create a table if not exists
    cursor.execute('''CREATE TABLE IF NOT EXISTS overspeed_data
                    (id INTEGER PRIMARY KEY AUTOINCREMENT,
                    timestamp TEXT,
                    speed REAL,
                    license_plate TEXT,
                    plate_image BLOB)''')

    # Convert the image to bytes for storage in the database
    _, image_buffer = cv2.imencode(".jpg", plate_image)
    image_bytes = image_buffer.tobytes()

    # Insert overspeed data into the database
    cursor.execute("INSERT INTO overspeed_data (timestamp, speed, license_plate, plate_image) VALUES (?, ?, ?, ?)",
                   (timestamp, vehicle_speed, license_plate, image_bytes))

    connection.commit()
    connection.close()

# Main function for overspeed detection
def overspeed_detection(video_path):
    cap = cv2.VideoCapture(video_path)
    old_frame = None
    old_timestamp = datetime.now()

    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break

        # Your overspeed detection logic goes here
        # For simplicity, let's assume a constant distance between two points in the frame
        distance_between_points = 100

        # Calculate time difference
        current_timestamp = datetime.now()
        time_difference = (current_timestamp - old_timestamp).total_seconds()

        # Calculate vehicle speed
        vehicle_speed = calculate_speed(old_frame, frame, time_difference, distance_between_points)

        # Recognize license plate
        license_plate = recognize_license_plate(frame)

        if license_plate:
            print(f"License Plate: {license_plate}")
            # Check if the vehicle is overspeeding (you can set your own threshold)
            overspeed_threshold = 40  # Set your own threshold in pixels per second
            if vehicle_speed > overspeed_threshold:
                print(f"Overspeed detected! Speed: {vehicle_speed}")

                # Save overspeed data to the database
                save_to_database(current_timestamp.strftime("%Y-%m-%d %H:%M:%S"),
                                  vehicle_speed, license_plate, frame)

        old_frame = frame.copy()
        old_timestamp = current_timestamp

        # Display the video feed (you can remove this in a real-world scenario)
        cv2.imshow("Video Feed", frame)

        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    cap.release()
    cv2.destroyAllWindows()

# Replace 'your_video_path.mp4' with the path to your video file
overspeed_detection('your_video_path.mp4')
