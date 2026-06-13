import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Create a simple backend: save submissions to a JSON file
    const dataDir = path.join(process.cwd(), 'data');
    const filePath = path.join(dataDir, 'submissions.json');
    
    // Ensure data directory exists
    try {
      await fs.access(dataDir);
    } catch {
      await fs.mkdir(dataDir, { recursive: true });
    }
    
    let submissions = [];
    try {
      const fileData = await fs.readFile(filePath, 'utf-8');
      submissions = JSON.parse(fileData);
    } catch (e) {
      // File doesn't exist yet, which is fine
    }
    
    const newSubmission = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      ...data
    };
    
    submissions.push(newSubmission);
    
    await fs.writeFile(filePath, JSON.stringify(submissions, null, 2));
    
    return NextResponse.json({ success: true, message: "Submission saved" }, { status: 200 });
  } catch (error) {
    console.error("Failed to save submission", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
