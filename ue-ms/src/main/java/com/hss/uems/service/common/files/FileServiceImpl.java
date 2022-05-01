package com.hss.uems.service.common.files;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.time.LocalDateTime;
import java.util.List;

import org.apache.commons.codec.binary.Base64;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.CreationHelper;
import org.apache.poi.ss.usermodel.IndexedColors;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFCellStyle;
import org.apache.poi.xssf.usermodel.XSSFFont;
import org.apache.poi.xssf.usermodel.XSSFHyperlink;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.hss.uems.config.constants.Random;
import com.hss.uems.service.common.utils.UtilService;


@Service
public class FileServiceImpl implements FileService{

	int counter = 0;
	String filePath = "";

	@Autowired
	UtilService utilService;

	private int takenSize;
	
	@Override
	public void validate(String path) {
		takenSize = 0;

		// Break the string to a list from each separation of \
		List<String> elements = utilService.breakString(path, "\\");
		filePath = elements.get(0);
		counter = 0;

		// Concatenate String with / as a separator to validate '/' separator also..
		elements.forEach(element -> {
			filePath += counter++ > 0 ? "/" + element : filePath;
		});

		// Break the string to a list from each separation of /
		elements = utilService.breakString(path, "/");
		filePath = elements.get(0);
		counter = 0;
		takenSize = elements.size();
		if (utilService.breakString(elements.get(takenSize - 1), ".").size() >= 2) {
			takenSize--;
		}
		counter = 0;

		// validate each path & create directory optionally if it doesn't exist
		elements.forEach(element -> {
			filePath += counter > 0 ? "/" + element : "";
			if (!new File(filePath).exists() && counter < takenSize) {
				new File(filePath).mkdir();
			}
			counter++;
		});
	}
	
	/**
	 * @param Location to a file
	 * @return byte[] array to the file
	 * */
	@Override
	public byte[] getFile(String location) throws IOException {
		File file = new File(location);
		return Files.readAllBytes(file.toPath());
	}

	@Override
	@SuppressWarnings("deprecation")
	public void setHyperlink(
            final XSSFWorkbook workbook,
            final String label,
            final String hyperlink,
            final XSSFSheet sheet,
            final Cell cell) {

        final CreationHelper createHelper = workbook.getCreationHelper();
        final XSSFHyperlink url = (XSSFHyperlink) createHelper.createHyperlink(XSSFHyperlink.LINK_URL);
        url.setAddress(hyperlink);

        final XSSFFont hyperlinkFont = workbook.createFont();
        hyperlinkFont.setColor(IndexedColors.BLUE.getIndex());

        final XSSFCellStyle hyperlinkStyle = workbook.createCellStyle();
        hyperlinkStyle.setFont(hyperlinkFont);
        hyperlinkStyle.setBorderBottom(CellStyle.BORDER_THIN);
        hyperlinkStyle.setBorderTop(CellStyle.BORDER_THIN);
        hyperlinkStyle.setBorderRight(CellStyle.BORDER_THIN);
        hyperlinkStyle.setBorderLeft(CellStyle.BORDER_THIN);

        cell.setCellType(XSSFCell.CELL_TYPE_STRING);
        cell.setHyperlink(url);
        cell.setCellValue(label);
        cell.setCellStyle(hyperlinkStyle);
    }
	
	@Override
	@SuppressWarnings("deprecation")
	public void setHyperlink(
            final XSSFWorkbook workbook,
            final String hyperlink,
            final XSSFSheet sheet,
            final Cell cell) {

        final CreationHelper createHelper = workbook.getCreationHelper();
        final XSSFHyperlink url = (XSSFHyperlink) createHelper.createHyperlink(XSSFHyperlink.LINK_URL);
        url.setAddress(hyperlink);

        final XSSFFont hyperlinkFont = workbook.createFont();
        hyperlinkFont.setColor(IndexedColors.BLUE.getIndex());

        final XSSFCellStyle hyperlinkStyle = workbook.createCellStyle();
        hyperlinkStyle.setFont(hyperlinkFont);
        hyperlinkStyle.setBorderBottom(CellStyle.BORDER_THIN);
        hyperlinkStyle.setBorderTop(CellStyle.BORDER_THIN);
        hyperlinkStyle.setBorderRight(CellStyle.BORDER_THIN);
        hyperlinkStyle.setBorderLeft(CellStyle.BORDER_THIN);

        cell.setCellType(XSSFCell.CELL_TYPE_STRING);
        cell.setHyperlink(url);
        cell.setCellValue(hyperlink);
        cell.setCellStyle(hyperlinkStyle);
    }
	
	@Override
	public String upload(String directory, String extension, String base64) throws FileNotFoundException, IOException {
		
		// validate Upload Directory...
		String filePath = directory;
		this.validate(filePath);

		byte[] imageByte=Base64.decodeBase64(base64);
		
		// Get Date Time As Prefix...
		LocalDateTime rightNow = LocalDateTime.now();
		int dd = rightNow.getDayOfMonth();
		int mm = rightNow.getMonthValue();
		int yyyy = rightNow.getYear();
		int m = rightNow.getMinute();
		int h = rightNow.getHour();
		String prefix = "" + dd + mm + yyyy + h + m;

		// Generate a FileName to be uploaded with provided extension
		String name = utilService.random(prefix, Random.ALPHANUMERIC, 05) + "." + extension;
		String fileName = filePath + File.separator + name;

		// Get a File object to the fileName & delete if there was one
		File file = new File(fileName);
		if (file.exists())
			file.delete();

        FileOutputStream stream = new FileOutputStream(fileName);
        stream.write(imageByte);
        stream.close();

		// Return the path to the created file...
		return directory + File.separator + name;

	}
	
	/**
	 * @param 1. directory : String location to file after webapps folder 2.
	 * extension : ENUM as the fileType of the one to be uploaded 3. MultipartFile :
	 * the object containing Multipart to the current location
	 * 
	 * @Return path to the newly uploaded file
	 */
	@Override
	public String upload(String directory, String extension, MultipartFile upload) throws Exception {

		// validate Upload Directory...
		String filePath = directory;
		this.validate(filePath);

		// Get Input Stream for MultipartFile...
		InputStream stream = upload.getInputStream();

		// Get Date Time As Prefix...
		LocalDateTime rightNow = LocalDateTime.now();
		int dd = rightNow.getDayOfMonth();
		int mm = rightNow.getMonthValue();
		int yyyy = rightNow.getYear();
		int m = rightNow.getMinute();
		int h = rightNow.getHour();
		String prefix = "" + dd + mm + yyyy + h + m;

		// Generate a FileName to be uploaded with provided extension
		String name = utilService.random(prefix, Random.ALPHANUMERIC, 05) + "." + extension;
		String fileName = filePath + File.separator + name;

		// Get a File object to the fileName & delete if there was one
		File file = new File(fileName);
		if (file.exists())
			file.delete();

		// Copy the file to the File object...
		Files.copy(stream, file.toPath());

		// Return the path to the created file...
		return directory + File.separator + name;
	}
	
	
}
