BACKUP_DIR=/home/syldor/backups/viengmo
USER=syldor

FILE_SUFFIX=_viengmo_backup.db
DATABASE=viengmo
# only the day so they replace themselves
FILE=`date +"%d"`${FILE_SUFFIX}
OUTPUT_FILE=${BACKUP_DIR}/${FILE}
pg_dump -U ${USER} ${DATABASE} -Fc -f ${OUTPUT_FILE}
echo "${OUTPUT_FILE} was created:"

aws s3 sync ${BACKUP_DIR} s3://viengmo-db-backups/
