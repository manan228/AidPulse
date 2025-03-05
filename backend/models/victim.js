import mongoose from 'mongoose';
const { Schema } = mongoose;

const victimSchema = new Schema({
  personal_information: {
    name: {
      type: String,
      trim: true
    },
    date_of_birth: {
      type: Date
    },
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Non-binary', 'Prefer not to say', '']
    },
    unique_id: {
      type: String,
      trim: true
    }
  },
  contact_information: {
    phone_number: {
      type: String,
      trim: true
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
    },
    emergency_contact_name: {
      type: String,
      trim: true
    },
    emergency_contact_phone: {
      type: String,
      trim: true
    }
  },
  location_information: {
    address: {
      type: String,
      trim: true
    },
    coordinates: {
      latitude: {
        type: Number,
        min: -90,
        max: 90
      },
      longitude: {
        type: Number,
        min: -180,
        max: 180
      }
    },
    temporary_shelter: {
      type: String,
      trim: true
    }
  },
  household_information: {
    adults: {
      type: Number,
      min: 0
    },
    children: {
      type: Number,
      min: 0
    },
    elderly: {
      type: Number,
      min: 0
    },
    pets: {
      type: Number,
      min: 0
    }
  },
  utility_information: {
    utility_type: {
      type: String,
      enum: ['Electric', 'Gas', 'Both', '']
    }
  },
  disaster_information: {
    disaster_type: {
      type: String,
      enum: ['Fire', 'Earthquake', 'Flood', 'Landslide', 'Storm', 'Other', '']
    },
    fire_active: {
      type: Boolean,
      default: false
    }
  },
  assistance_information: {
    medical_assistance: {
      type: Boolean,
      default: false
    }
  },
  timestamp: {
    report_time: {
      type: Date,
      default: Date.now
    }
  }
}, {
  timestamps: true // Adds createdAt and updatedAt fields
});

// Create geospatial index on coordinates
victimSchema.index({
  'location_information.coordinates': '2dsphere'
});

// Create text index for searching
victimSchema.index({
  'personal_information.name': 'text',
  'location_information.address': 'text',
  'location_information.temporary_shelter': 'text'
});

const Victim = mongoose.model('Victim', victimSchema);

export default Victim;